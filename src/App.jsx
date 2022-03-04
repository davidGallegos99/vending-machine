import { useEffect, useState } from 'react'
import './App.css'
import { Spinner } from './components/Spinner';
import { VendingMachine } from './components/VendingMachine'
const { VITE_ENDPOINT:BASE_URL } = import.meta.env;

function App() {
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([])
  const [error, seterror] = useState(null)


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
    <>
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
    </>
    
  )
}

export default App
