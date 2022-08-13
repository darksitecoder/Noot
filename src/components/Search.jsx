import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useStateContext } from '../contexts/StateContextProvider';
import { Links } from './Links';
import Close from '@mui/icons-material/Close';

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('darksitecoder');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3 w-96">
    <div className="relative mt-3 w-[100%] sm:w-96 dark:bg-gray-800 dark:text-white  border rounded-full shadow-sm outline-none pl-5 text-black hover:shadow-lg sm:flex sm:flex-col">
      <input
        value={text}
        type="text"
        className="border-none bg-transparent w-[85%] h-10 outline-none"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text !== '' && (
        <button type="button" className="absolute top-0.5 right-4 text-2xl text-black dark:text-white  " onClick={() => setText('')}>
          <Close />
        </button>
      )}
      </div>
      <Links />
    </div>
  );
};