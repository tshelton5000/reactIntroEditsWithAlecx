import React, {useState, useEffect} from 'react';

const Hooks = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});

  const fetcher = () => {
    fetch(`https://swapi.co/api/people/${query}`)
      .then(res => res.json())
      .then(json => {setResults(json); console.log(json)})
  }

  return(
    <div className="main">
      <div className="mainDiv">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your sw character number"/>
        <button onClick={() => fetcher()}>Click for Character!</button>
        {results ? <h2>{results.name}</h2> : <div></div>}
      </div>
    </div>
  )
}

const Hooks2 = () => {
  const [charObj, charNum, numSelector] = useSwHook('')

  return(
    <div className="main">
      <div className="mainDiv">
        <h3>Enter a number below to see a number fact</h3>
        <input value={charNum} onChange={e => numSelector(e.target.value)} placeholder="enter your sw character number"/>
        {charObj ? <h2>{charObj}</h2> : <div></div>}
      </div>
    </div>
  )
}

const useSwHook = (num) => {
  const [queryNum, setQueryNum] = useState(num);
  const [results, setResults] = useState('');

  useEffect(() => {
    if (queryNum !== ''){
      fetch(`http://numbersapi.com/${queryNum}`)
        .then(res => res.text())
        .then(json => {setResults(json); console.log(json)})

    }
  }, [queryNum])

  return [results, queryNum, setQueryNum];
}

export default Hooks2;