import React, { useContext, useState } from 'react'
import OrderContext from '../Context/OrderContext'
import { Modal } from './Modal';
import { ProductList } from './ProductList';
import { Timer } from './Timer';

export const Order = () => {
    const orderContext = useContext(OrderContext);
    const [queue, setqueue] = useState([])
    const [showModal, setshowModal] = useState(false)
    const [summary, setsummary] = useState({})
    const handleClick = () => {
        const counts = {}
        const duplicatedProd = orderContext.dispatched.map(el => el.name)
        duplicatedProd.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        setsummary(counts)
        setshowModal(true)
    }

  return (
      <>
        {
            orderContext.dispatched.length > 0 && (
                <button onClick={handleClick} className='button dispatched'>View dispatched</button>
            )
        }
        {
            orderContext.orderList.length > 0 && (
                <>
                    <Timer 
                        queue={queue}
                        setqueue={setqueue}
                    />
                    <p className='title-order'>Order</p>
                    <ProductList
                        preparationCondition={true}
                        showButton={false}
                        productos={queue}
                    />
                    <div className="linea"></div>
                </>
            )
        }
        <Modal 
            handleClose={()=> setshowModal(false)}
            showModal={showModal}
            title={'Dispatched order'}
            key={'Modal'}
        >
            {
                Object.keys(summary).map((el,i) => (
                    <p key={el+i}><b>{el}: </b>{summary[el]}</p>
                ))
            }
        </Modal>
      </>
  )
}
