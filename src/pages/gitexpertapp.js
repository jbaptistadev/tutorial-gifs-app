import React, { useState } from 'react';
import AddCategory from '../components/AddCategory';
import GifGrid from '../components/GifGrid';

const GitExpertApp = () => {
  const initialState = [];

  const [categories, setCategories] = useState(initialState);

  /*  const handleAdd = () => {
    //setCategories((values) => [...values, 'Hunter x Hunter']);
    setCategories([...categories, 'Hunter x Hunter']);
  }; */

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => (
          <GifGrid key={index} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GitExpertApp;
