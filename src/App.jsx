import { useEffect, useState } from 'react'
import './App.css'
import { Spinner } from './components/Spinner';
import { VendingMachine } from './components/VendingMachine'
import OrderContext from './Context/OrderContext';
const { VITE_ENDPOINT:BASE_URL } = import.meta.env;

function App() {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([])
  const [error, seterror] = useState(null)
  const [orderList, setOrderList] = useState([])
  const [dispatched, setdispatched] = useState([])

  const getProducts = async () => {
      try {
          const res = await (await fetch(BASE_URL)).json();
          setproducts(res.data);
          console.log(res);
            setloading(false);
      } catch (error) {
          setloading(false);
          seterror(error)
      }
  }

  useEffect(()=> {
      getProducts()
  }, []) 

  return (
    <OrderContext.Provider value={{orderList, setOrderList,dispatched,setdispatched}}>
      {
        loading ?(
          <Spinner />
        ) : (
          <VendingMachine
            error={error}
            productos={products}
          />
        )
      }
    </OrderContext.Provider>
    
  )
}

export default App
