import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getProducts } from '../../Actions/MainAction';
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'
import {useNavigate} from "react-router-dom"

const StoreComponent = () => {
    const categories = useSelector(state => state.Data.categories);
    const products = useSelector(state => state.Data.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("ddd", products)
    
    const sliderRef = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(0);

  const slide = (direction) => {
        const slider = sliderRef.current;
        const cardWidth = slider.firstChild.offsetWidth;
        const marginRight = parseInt(window.getComputedStyle(slider.firstChild).marginRight);
        const step = direction === 'prev' ? cardWidth + marginRight : -(cardWidth + marginRight);
        const totalWidth = (cardWidth + marginRight) * slider.children.length - marginRight;

        let newPosition = currentPosition + step;

        if (newPosition > 0) {
        newPosition = 0;
        } else if (newPosition < -totalWidth + cardWidth) {
        newPosition = -totalWidth + cardWidth;
        }

        setCurrentPosition(newPosition);
   }
    

    function getProductsbyCategory(id) {
        console.log(id)
        dispatch(getProducts(id))
    }

    // function getProductPropertiesAndImagesByProduct(id) {
    //     dispatch(getProductProperties(id), getImages("", id))
    // }

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    useEffect(() => {
        dispatch(getProducts())
    }, [])
  return (
    <main>
        <div className='store_main_container'>
            <div className="left_container">
                {
                    categories?.map((data, i) => {
                        return (
                            <div className="category">
                                <p onClick={() => getProductsbyCategory(data.id)} key={i} value={data?.id} >{data?.title}</p>
                            </div>
                        )
                    })
                }
                <div className="price_range"></div>
            </div>
            <div className="store_card_slider">
                <img onClick={() => slide('prev')} className='left_arrow' src={leftArrow} alt="" />
                <div className="store_card_container" ref={sliderRef} style={{ transform: `translateY(${currentPosition}px)` }}>
                    {
                        products?.map((data, i) => {
                            return (
                                <div className="store_card" key={i} value={data?.id}>
                                    <img onClick={()=>navigate(`/product/${data.id}`)} src={"http://localhost:5000/"+data?.image} alt="" />
                                    <h1>{data?.title}</h1>
                                    <div className="price_buy">
                                        <div className="price_class">
                                            <span className='price'>{data?.price}$</span>
                                            <span className='discountprice'>{data?.discountPrice}$</span>
                                        </div>
                                        <button className='buy_product'>Buy</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <img onClick={() => slide('next')} src={rightArrow} alt="" />
            </div>
        </div>
    </main>
  )
}

export default StoreComponent