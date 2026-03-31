
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Carts from './Components/Main/Carts/Carts'
import Navbar from './Components/Navbar/Navbar'
import Rating from './Components/Rating/Rating'
import Started from './Components/Started/Started'


const fetchCart = async () => {
  const res = await fetch("/data.json");
  return res.json();
}



function App() {
 const cartPromise = fetchCart();

  return (
    <>
     
    <Navbar></Navbar>  
    <Banner></Banner>
    <Rating></Rating> 
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
       <Carts cartPromise={cartPromise}></Carts>
    </Suspense>
    <Started></Started>
    
    

    

      
    </>
  )
}

export default App
