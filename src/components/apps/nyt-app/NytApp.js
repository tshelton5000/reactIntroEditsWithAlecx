import React, { useState } from 'react';
import NytResults from './NytResults';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'yourKeyHereabc123def456ghi789jkl0';

const NytApp = () => {
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

  handleSubmit = (event) => {
    event.preventDefault();
    setPageNumber(0);
    fetchResults();
  };

  changePageNumber = (event, direction) => {
    event.preventDefault();

    if(direction === 'down') {
      if(pageNumber > 0) {
        setPageNumber(pageNumber + 1);
        this.fetchResults();
      }
    }

    if(direction === 'down') {
      setPageNumber(pageNumber - 1);
      this.fetchResults();
    }
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <form onSubmit={(e) => handleSubmit(e)}>
          <span>Enter a single search term (required) : </span>
          <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
          <br />
          <span>Enter a start date: </span>
          <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStateDate(e.target.value)} />
          <br />
          <span>Enter an end date: </span>
          <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />
          <br />
          <button className="submit">Submit search</button>
        </form>

      {
        results.length > 0 ? <NytResults results={ results } changePageNumber={ changePageNumber } /> : null 
      }

      </div>
    </div>
  );
};

export default NytApp;