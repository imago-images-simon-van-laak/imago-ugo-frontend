import React, { useState } from 'react';
import { SearchParams } from '../services/searchService';
import Button from '../components/Button';
import Input from '../components/Input';

interface SearchFormProps {
    onSearch: (params: SearchParams) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch({ keyword });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6"
        >
            <Input
                placeholder='Enter your search keyword'
                type='text'
                value={keyword}
                onChange={setKeyword}
            />
            <Button label='Search' />
        </form>
    );
};

export default SearchForm;
