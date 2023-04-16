import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IErrors } from './data';
import { SearchState, setLoading, setSearchResults, setSearchText, store } from './store';

import noInternet from '../../../assets/pngwing.com (1).png';
import responseStatus404 from '../../../assets/pngmor.png';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: SearchState) => {
    return state.searchText;
  });
  const [searchValue, setSearchValue] = useState(searchText || '');

  const searchResults = useSelector((state: SearchState) => {
    return state.searchResults;
  });
  const [invalid, setInvalid] = useState<boolean>(false);

  // useEffect(() => {
  //   dispatch(setSearchText(searchText));
  // }, [dispatch, searchText]);

  // const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(event.target.value);
  //   await console.log(searchValue);
  //   // console.log(searchText);
  //   // if (searchValue) dispatch(setSearchText(searchValue));
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // useEffect(() => {
  //   console.log(searchResults);
  // }, [searchResults]);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // setSearchText(event.target.value);
  //   const inputValue = event.target.value;
  //   dispatch(setSearchText(inputValue));
  // };

  const handleSearch = async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No such character!');
        }
        if (response.status === 500) {
          throw new Error('Server error. Please try again later.');
        }
        throw new Error('Unknown error.');
      }
      const data = await response.json();
      dispatch(setSearchResults(data.results));
      dispatch(setSearchText(searchValue));
    } catch (error) {
      if (error instanceof TypeError) {
        const obj: IErrors = {
          errorStatus: 0,
          text: 'Сheck internet connection',
          image: noInternet,
        };
        dispatch(setSearchResults(obj));
      } else {
        const obj: IErrors = {
          errorStatus: 0,
          text: 'No such character!',
          image: responseStatus404,
        };
        dispatch(setSearchResults(obj));
        dispatch(setSearchText(searchValue));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchValue.trim() !== '') {
      event.preventDefault();
      setInvalid(false);
      handleSearch();
    } else {
      setInvalid(true);
    }
  };

  return (
    <>
      <div className="search-bar__container">
        <input
          className={`search-bar${invalid ? ' error' : ''}`}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="search-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
