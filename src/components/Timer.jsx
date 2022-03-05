import React, { useContext, useEffect, useState } from 'react'
import OrderContext from '../Context/OrderContext';
import { FormateDate } from '../utils/Helpers';

export const Timer = ({
    queue, 
    setqueue
}) => {
    const orderContext = useContext(OrderContext);
    const [timer, settimer] = useState(null)
    const [tempo, settempo] = useState();
    const [max, setmax] = useState(0)

    const sumPreparationTimes = (list) => {
        let nums = []
        nums = list.map(element => {
            return element.preparation_time; 
        })
        if( nums[0] > max) {
            setmax(nums[0]);
            settempo(nums[0])
        } else if(max == nums[0]) {
            setmax(max)
            settempo(max)
        }
        clearInterval(timer)
        settimer(setInterval(() => {
                settempo(temp => temp-1);
            }, 1000))
    }

    const updateQueue = () => {
        const updated = queue.map(el => ({...el,preparation_time:el.preparation_time > -1 ? (el.preparation_time)-1 : el.preparation_time}))
        orderContext.setdispatched(updated.filter(el => el.preparation_time == -1))
        
        setqueue(updated)
    }

    useEffect(()=> {
        updateQueue()
        if(tempo == -1) {
            orderContext.setOrderList([])
            setqueue([])
            clearInterval(timer)
        }
    },[tempo])

    useEffect(() => {
      return () => {
       clearInterval(timer)
      }
    }, [])
    
    
    

    useEffect(() => {
        let data = {...orderContext.orderList[0]}
        data.preparation_time += 1;
        setqueue([data,...queue])
        sumPreparationTimes(orderContext.orderList)

    }, [orderContext.orderList])

  return (
    <div className='temporizador'>
        <h3>Chronometer</h3>
        <p>Time left: {FormateDate(tempo)}</p>
    </div>
  )
}
