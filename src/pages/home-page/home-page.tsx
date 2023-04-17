import React from 'react';
import { Cards } from './components/cards';
import { SearchBar } from './components/search-bar';

import '../style.css';
import { Modal } from './components/modal/modal';
import Overlay from './components/modal/overlay';
import { useDispatch, useSelector } from 'react-redux';
import { IStateModal, modalActions } from './slises/modalSlise';

const HomePage = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state: IStateModal) => state.modalStatus);

  const handleModalClose = (): void => {
    dispatch(modalActions.addValue(false));
  };

  return (
    <>
      <div className="search-bar__wrapper">
        <h2 data-testid="main-page">Main page</h2>
        <SearchBar />
      </div>
      {<Cards />}
      {modalStatus.modalStatus && <Overlay onClick={handleModalClose} />}
      {modalStatus.modalStatus && <Modal />}
    </>
  );
};

export { HomePage };
