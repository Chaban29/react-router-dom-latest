import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const BlogFilter = ({ setSearchParams, latest, postQuery }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const isLatest = form.latest.checked;

    const params = {};

    const query = form.search.value;

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
  };

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <input
        type='search'
        name='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <label style={{ fontSize: '12px', margin: '0 1rem' }}>
        <input
          type='checkbox'
          name='latest'
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />{' '}
        New only
      </label>
      <input type='submit' value='Search' />
    </form>
  );
};
