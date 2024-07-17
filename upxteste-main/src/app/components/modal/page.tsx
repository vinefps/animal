import React from 'react';

const Modal = ({ title, content, closeModal }:any) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p>{content}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={closeModal}>Fechar</button>
    </div>
  );
};

export default Modal;