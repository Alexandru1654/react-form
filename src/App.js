import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    setArticles([...articles, title]);
    setTitle('');
  };




  const handleDelete = (index) => {
    const newArticles = articles.filter((_, i) => i !== index);
    setArticles(newArticles);
  };

}

export default App;





