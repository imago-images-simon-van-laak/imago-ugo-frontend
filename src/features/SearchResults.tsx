import React from 'react';

export interface SearchResult {
  id: string;
  title: string;
  suchtext?: string;
  datum?: string;
  [key: string]: any;
}

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  if (results.length === 0) {
    return <p className="text-center text-gray-500">Empty.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => {
        const dateString = result.datum ? new Date(result.datum).toLocaleDateString() : 'N/A';
        return (
          <div
            key={result.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
            <p className="text-gray-700 mb-4">{result.suchtext || 'No details available'}</p>
            <p className="text-sm text-gray-500">
              <strong>Date:</strong> {dateString}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
