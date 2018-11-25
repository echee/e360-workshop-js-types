import React from 'react';
import 'bulma/css/bulma.css';

const SearchForm = () => {
  return (
    <form>
      <div class="field">
        <label class="label">Search Term</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Star Wars" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button type="button" class="button is-link">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
