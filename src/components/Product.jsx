import React, { useContext } from 'react'
import OrderContext from '../Context/OrderContext';
import { FormateDate, generarId } from '../utils/Helpers';
export const Product = ({
    id,
    name,
    thumbnail,
    preparation_time,
    showDetails
}) => {
    const ShowDefaultImage = (currentTarget) => {
        currentTarget.onerror = null;
        currentTarget.src="https://bitsofco.de/content/images/2018/12/broken-1.png";
    }
    const orderContext = useContext(OrderContext)

    const addProduct = () => {
        const data = {
            id:generarId(),
            name,
            thumbnail,
            preparation_time,
            dispatched:false
        }
        orderContext.setOrderList(order => ([data,...order]))

    }

  return (
    <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
            <img src={thumbnail} alt={`${name}-img`} onError={({currentTarget})=>ShowDefaultImage(currentTarget)} />
        </div>
        <div className="product-details">
            <span className="product-catagory">{name}</span>
            <h4><a>{name}</a></h4>
            {
                showDetails ? (
                    <>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                        <div className="product-bottom-details">
                            <div className="product-price"><small>Preparation time: </small>{FormateDate(preparation_time)}</div>
                            <div className="product-links">
                                <a href=""><i className="fa fa-heart"></i></a>
                                <a href=""><i className="fa fa-shopping-cart"></i></a>
                                <button onClick={addProduct} className='button'>Order</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <p><b>Time left: </b>{FormateDate(preparation_time)}</p>
                )
            }
            
        </div>
    </div>
  )
}
