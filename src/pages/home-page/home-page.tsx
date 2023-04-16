import React from 'react';
import { Cards } from './components/cards';
import { SearchBar } from './components/search-bar';

import '../style.css';
import { Spinner } from './components/spinner';
import { Modal } from './components/modal/modal';
import Overlay from './components/modal/overlay';
import { SearchState, setModalStatus } from './components/store';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: SearchState) => {
    return state.loading;
  });

  const modalStatus = useSelector((state: SearchState) => {
    return state.modalStatus;
  });

  const handleModalClose = (): void => {
    dispatch(setModalStatus(false));
  };

  return (
    <>
      <div className="search-bar__wrapper">
        <h2 data-testid="main-page">Main page</h2>
        <SearchBar />
      </div>
      {loading ? <Spinner /> : <Cards />}
      {modalStatus && <Overlay onClick={handleModalClose} />}
      {modalStatus && <Modal />}
    </>
  );
};

export { HomePage };
