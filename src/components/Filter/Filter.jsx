import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Find contacts by name"
    />
  );
};
