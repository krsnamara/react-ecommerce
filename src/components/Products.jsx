import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "../urls";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;`;

const Products = ({cat,filters,sort}) => {
  
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () =>{
      try {
        const res = await axios.get(cat 
          ? `${API_URLS.CATEGORY}${cat}` 
          : `${API_URLS.ALL}`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=> 
        Object.entries(filters).every(([key,value])=> 
          item[key].includes(value)
        )
      )
    );
  },[products,cat,filters])

  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc"){
      setFilteredProducts(prev=>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts(prev=>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  

  return (
    <Container>
    {cat
      ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
      : Array.isArray(products)
          ? products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item.id} />)
          : null} 
  </Container>
  )
};

export default Products;