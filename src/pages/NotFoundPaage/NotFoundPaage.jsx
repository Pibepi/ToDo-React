import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPaage.css';

const NotFoundPaage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-page">
      <h1 className="not-found-heading">404 - Not Found</h1>
      <p className="not-found-text">Sorry, the page you are looking for does not exist.</p>
      <button className="back-button" onClick={goBack}>Go back</button>
    </div>
  );
};

export default NotFoundPaage;
