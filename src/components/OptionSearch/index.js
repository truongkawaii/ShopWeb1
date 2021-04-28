import React from 'react';
import './OptionSearch.scss';

function OptionSearch() {
  return (
    <div className="option-search">
      <h2>Trạng thái</h2>
      <div className="item-option">
        <select>
          <option>All</option>
        </select>
        <div className="item-search">
          <input type="text" placeholder="Từ khóa" />
          <button type="button">Tìm kiếm</button>
        </div>
      </div>
    </div>
  );
}

export default OptionSearch;
