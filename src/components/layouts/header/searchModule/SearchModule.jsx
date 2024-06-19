import React from "react";

const SearchModule = ({ data,showList }) => {
  let product = data?.data?.products;
  console.log(showList);
  return (
    <div
      className={
        showList
          ? "shorter__header__search-module"
          : "header__search-module"
      }
    >
      {product?.map((el) => (
        <div key={el.id} className="header__search-module__card">
          <img src={el.urls[0]} alt="img" />
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchModule;
