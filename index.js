fetch('https://favqs.com/api/qotd')
  .then(res => res.json())
  .then(json => console.log(json))