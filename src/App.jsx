
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Carts from './Components/Main/Carts/Carts'
import Navbar from './Components/Navbar/Navbar'
import Rating from './Components/Rating/Rating'
import Started from './Components/Started/Started'
import SimplePricing from './Components/SimplePricing/SimplePricing'
import Workflow from './Components/Workflow/Workflow'


const fetchCart = async () => {
  const res = await fetch("/data.json");
  return res.json();
}



function App() {
 const cartPromise = fetchCart();
  const [selectedCarts, setSelectedCarts] = useState([]);
  return (
    <>
     
    <Navbar selectedCarts={selectedCarts}></Navbar>  
    <Banner></Banner>
    <Rating></Rating> 
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
       <Carts 
       cartPromise={cartPromise}
       selectedCarts={selectedCarts}
        setSelectedCarts={setSelectedCarts}
       ></Carts>
    </Suspense>
    <Started></Started>
    <SimplePricing></SimplePricing>
    <Workflow></Workflow>
    
    

    

      
    </>
  )
}

export default App
