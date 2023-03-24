import { useState ,useEffect, useCallback} from "react"
import { useFetch } from "../hooks/useFetch";
import Loading from "../assets/loading.gif"
export const ProductList = () => {
    
    const[url,setUrl]=useState("http://localhost:8000/products");
    // useEffect(()=>{
    //   console.log(counter);
    // },[counter])

    // const [counter,setCounter]=useState(0);
    // useEffect(()=>{
    //     fetch(url)
    //     .then(response=>response.json())
    //     .then(data=>setProducts(data));
    // },[url])
    // const fetchProduct= useCallback(
    //   async ()=>{
    //     const response=await fetch(url);
    //     const data=await response.json();
    //     setProducts(data);
    //   },[url]);

    const {data:products,loading,error}=useFetch(url);
    
    
    // useEffect( ()=>{
      
    //   fetchProduct();
      
    // },[fetchProduct]);

    
    
  return (
    <section>
      <div className="filter">
        {/* <button onClick={()=>setCounter(counter+1)}>{counter}</button> */}
        <button className="all" onClick={()=> setUrl("http://localhost:8000/products")}>All</button>
        <button className="onlyAvailable" onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}>Available</button>
      </div>  
      {loading && <p className="loading"><img src={Loading} alt="" /></p>}
      {error && <p>{error}</p>}
      {products && products.map((product)=>(
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p  className="info">
            <span>₹ {product.price}</span>
            <span className={product.in_stock ? "available":"unavailable"}>{product.in_stock ? "Available":"Unavailable"}</span>
          </p>
        </div>))}
    </section>
  )
}
