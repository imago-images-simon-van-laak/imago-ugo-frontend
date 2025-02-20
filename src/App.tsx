import React, { useState } from 'react';
import SearchForm from './features/SearchForm';
import SearchResults, { SearchResult } from './features/SearchResults';
import { SearchParams, performSearch } from './services/searchService';
import Button from './components/Button';

const App: React.FC = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [currentKeyword, setCurrentKeyword] = useState('');

  const handleSearch = async (params: SearchParams) => {
    setLoading(true);
    setCurrentPage(1);

    const { keyword } = params;
    const cleanedKeyword = keyword.trim().toLowerCase().replace(/[^\w\s]/gi, '');

    try {
      const { results: newResults } = await performSearch({
        keyword: cleanedKeyword,
        page: 1,
        pageSize,
      });
      setResults(newResults);
      setCurrentKeyword(cleanedKeyword);
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeeMore = async () => {
    if (loading) return;

    const nextPage = currentPage + 1;
    setLoading(true);
    try {
      const { results: newResults } = await performSearch({
        keyword: currentKeyword,
        page: nextPage,
        pageSize
      });
      setResults((prev) => [...prev, ...newResults]);
      setCurrentPage(nextPage);
    } catch (error) {
      console.error('Error loading more results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 p-12">
      <h1 className="text-3xl font-bold">IMAGO Search</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={results} />
      {loading && <p>Loading...</p>}
      {results.length > 0 && !loading && (
        <Button label="See More" onClick={handleSeeMore} />
      )}
    </div>
  );
};

export default App;
