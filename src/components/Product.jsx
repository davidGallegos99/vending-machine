import React from 'react'
import { FormateDate } from '../utils/Helpers';
export const Product = ({
    name,
    thumbnail,
    preparation_time
}) => {
    const ShowDefaultImage = (currentTarget) => {
        currentTarget.onerror = null;
        currentTarget.src="https://bitsofco.de/content/images/2018/12/broken-1.png";

    }
  return (
    <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
            <img src={thumbnail} alt={`${name}-img`} onError={({currentTarget})=>ShowDefaultImage(currentTarget)} />
        </div>
        <div className="product-details">
            <span className="product-catagory">{name}</span>
            <h4><a href="">{name}</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
            <div className="product-bottom-details">
                <div className="product-price"><small>Preparation time: </small>{FormateDate(preparation_time)}</div>
                <div className="product-links">
                    <a href=""><i className="fa fa-heart"></i></a>
                    <a href=""><i className="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}
