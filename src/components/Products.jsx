import styled from "styled-components";
import { popularProducts } from "../data"
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;`;

const Products = ({cat,filters,sort}) => {
  
  const [products,setProducts] = useState([]);
  const [filteredProduct,setfilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () =>{
      try {
        const res = await axios.get("http://localhost:3000/api/products");
        console.log(res)
      } catch (err) {}
    };
    getProducts()
  }, [cat]);
  // useEffect(() => {
  //   const getProducts = aysnc () => {
  //     try {
  //       const res = await axios.get("http://localhost:3000/api/products");
  //       console.log(res)
  //     } catch (err) {}
  //   }; 
  //   getProducts()
  // },[cat]);

  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
};

export default Products;