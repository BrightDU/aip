import logo from './logo.svg';
import React, { Component, useEffect, useState } from 'react'
// import './App.css';
import './style.css';
import './style.css';

import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';



export const TermsAndConditions = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    return (
        <div style={{position:"relative", left: 0, right: 0, bottom: 0, top: "0px"}}>
            <iframe src="./terms-and-conditions.pdf">
            </iframe>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
      );
}

export default TermsAndConditions;

