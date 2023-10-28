import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = ({ contacts }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterChange}
        placeholder="Find contacts by name"
      />
    </>
  );
};
