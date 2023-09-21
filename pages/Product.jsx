import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById, getProductPropertiesById } from '../Actions/MainAction';
import { useParams } from 'react-router-dom';
import Header from '../components/home_components/Header';
import Footer from '../components/home_components/Footer';
import { changeStateValue } from '../redux/MainReducer';

const Product = () => {
  const productsData = useSelector(state => state.Data.productsData);
  const productproperties = useSelector(state => state.Data.productproperties);
  
  // const images = useSelector(state => state.Data.images);
  const dispatch = useDispatch();
  const params = useParams();


  useEffect(() => {
    dispatch(getProductPropertiesById(params.id))
  }, [])

  useEffect(() => {
    dispatch(getProductById(params.id))
  }, [])
 
  return (
    <div>
      <Header />
            <main>
                <div className='product_main_container'   >
                    <div className="image_container">
                        <div className="img">
                          <img src={"http://localhost:5000/"+productsData.image} alt="" />
                        </div>
                    </div>
                      <div  className="specs_container">
                          <span>{productproperties.title}</span>
                          <p>{productproperties.value}</p>  
                      </div>           
                </div>               
            </main>
      <Footer />
    </div>
  )
}

export default Product