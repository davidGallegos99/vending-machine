import { createContext } from "react";

const OrderContext = createContext({
    orderList:[],
    setOrderList: (order)=> {},
    dispatched:[],
    setdispatched: (product)=> {}
})

export default OrderContext