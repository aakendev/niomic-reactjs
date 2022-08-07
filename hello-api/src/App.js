import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => setData(res.data)
      );
  }, []);
  
  return (
    <div>
      {data.map(item => <p>{item.title}</p>)}
    </div>
  );
}

export default App;
