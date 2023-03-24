import { useState ,useEffect} from "react"

export const ProductList = () => {
    const [products,setProducts]=useState([]);
    const[url,setUrl]=useState("http://localhost:8000/products");
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setProducts(data));
    },[url])
    useEffect(()=>{
      console.log(counter);
    },[counter])
    
  return (
    <section>
      <div className="filter">
        <button onClick={()=>setCounter(counter+1)}>{counter}</button>
        <button className="all" onClick={()=> setUrl("http://localhost:8000/products")}>All</button>
        <button className="onlyAvailable" onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}>Available</button>
      </div>  
      {products.map((product)=>(
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
