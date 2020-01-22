import React from 'react';
import Modal from 'react-modal';

const customStyles = {};

export default ({ close, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={close} style={customStyles}>
      <iframe src="http://www.acumatica.com"></iframe>
    </Modal>
  );
};
