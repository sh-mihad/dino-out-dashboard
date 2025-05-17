import { useState } from "react"
import LeftBar from "./components/LeftBar"
import Navbar from "./components/Navbar"
import RightSideBar from "./components/RightSideBar"


function App() {
  const [orders,setOrders] = useState([])

  const handleAddOrder = (item)=>{
    setOrders([...orders,{...item,id:order.length+1}])
  }
  const handleChangeStatus = (id)=>{
    const nextOrders = orders.map(item=>{
      if(item.id === id){
        return {...item,isDelivered:true}
      }else{
        return item
      }
    })
    setOrders(nextOrders)
  }
  const handleDeleteOrder = (id)=>{
    const nextOrders = orders.filter(item=>item.id !== id)
    setOrders(nextOrders)
  }

  return (
  <div className='container mx-auto px-4 h-screen flex flex-col'>
    <Navbar/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <LeftBar/>
      <RightSideBar/>
    </div>
  </div>
  )
}

export default App
