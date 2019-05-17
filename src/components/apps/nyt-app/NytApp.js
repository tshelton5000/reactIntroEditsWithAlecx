import React, { useState } from 'react';

const NytApp = () => {
  // state
  const [ search, setSearch ] = useState('');
  const [ stateDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ results, setResults ] = useState([]); 

  fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`;
    url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url;
    url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url;

    fetch(url)
      .then(res => res.json())
      .then(data => setResults(data.response.docs))
      .catch(err => console.log(err));
  };



  return (
    <div className="main">
      <div className="mainDiv">
        
      </div>
    </div>
  );
};

export default NytApp;