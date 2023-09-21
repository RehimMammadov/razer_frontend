import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Actions/MainAction';

const BasketComponent = () => {
  const products = useSelector(state => state.Data.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  });
  return (
    <div className='basket_main_container'>
        {
          products?.map((data, i) => {
            return (
              <div className="product_basket_container" key={i} value={data?.id}>
                  <h1>{data?.id.title}</h1>
              </div>
            )
          })
        }
        <div className="product_count&price"></div>
    </div>
  )
}

export default BasketComponent