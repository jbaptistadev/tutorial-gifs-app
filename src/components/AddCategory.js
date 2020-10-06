import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';

const AddCategory = ({ setCategories }) => {
  const initialState = '';

  const [value, setValue] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length > 2) {
      setCategories((values) => [value, ...values]);
      setValue(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button size="small" type="submit">
        agree
      </Button>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
