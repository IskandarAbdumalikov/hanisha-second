import React from 'react'
import { LuShoppingCart } from "react-icons/lu";

import { useGetAllProductsQuery } from '../../context/productsSlice'
import { useGetCategoriesQuery } from '../../context/categorySlice'

import './products.scss'
import { CiHeart } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const Products = () => {
  const { data } = useGetAllProductsQuery()
  const { data: categoriesData } = useGetCategoriesQuery()
  // console.log(categoriesData.data);

  let categories = categoriesData?.data.map(el => (
    <li key={el.id}>
      <data value={el.title}>{el.title}</data>
    </li>
  ))

  let card = data?.data.products.map(el => (
    <div key={el.id} className="products__cards__card">
      <div className="products__cards__card-img">
        <img src={el.urls[0]} alt="images" />
      </div>
      <div className="products__cards__card-rating">
        <FaStar className='stars'/>
        <FaStar className='stars'/>
        <FaStar className='stars'/>
        <FaStar className='stars'/>
        <FaStar className='stars'/>
      </div>
      <div className="products__cards__card-title">
        <span>{el.title}</span>
      </div>
      <div className="products__cards__card-shop">
        <p>{el.price}</p>
        <button><LuShoppingCart className='icon' /></button>
        <button className='heart'><CiHeart /></button>
      </div>
    </div>
  ))

  return (
    <div className='products container'>
      <div className="products__title">
        <h1>Our Products</h1>
      </div>
      <div className="products__category">
        <ul>
          <li>all</li>
          {categories}
        </ul>
      </div>
      <div className="products__cards">
        {card}
      </div>
    </div>
  )
}

export default Products