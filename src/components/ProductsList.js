import React, {useState, useRef, useEffect, useContext} from "react";
import { AppContext } from "../components/ContextProvider";

import Product from "./Product";
import Exchange from "./Exchange";
import ProductHistory from "./ProductHistory";
import usePagination from "./Pagination";
import IconNext from "./IconNext";
import IconPrev from "./IconPrev";
import {IconButton} from '@material-ui/core';

import Moment from "moment";
import "moment/locale/es";
import SuccessExchange from "./SuccessExchange";
import ErrorExchange from "./ErrorExchange";
import Exchanging from "./Exchanging";

const ITEMSPERPAGE = 16;

const ProductsList = ({ products, user, history, hasError, isLoading, exchangeHasError, exchangeIsLoading, exchange: {message} }) => {
  const {searchTerm, priceRange, searchCategory, sort, currentId, historyQuery, dateFrom, dateTo, currentPage, currentExchangingId} = useContext(AppContext);
  let productsFiltered = useRef(null);
  let historyFiltered = useRef(null);
  const [productList, setProductList] = useState([]);
  const [historyList, setHistoryList] = useState([]);

  
  useEffect(() => {
    
    if(historyQuery){
      historyFiltered.current = history;
      historyFiltered.current = historyFiltered.current.filter(product => Moment(product.createDate).format("YYYY-MM-DD") >= dateFrom && Moment(product.createDate).format("YYYY-MM-DD") <= dateTo); 
      
      if(searchTerm){
        historyFiltered.current = historyFiltered.current.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      if(priceRange){
        historyFiltered.current = historyFiltered.current.filter(product => product.cost >= priceRange[0] && product.cost <= priceRange[1]);
      }
      if(searchCategory){
        historyFiltered.current = historyFiltered.current.filter(product => searchCategory.indexOf(product.category) > -1)
      }
      if(sort){
        if(sort === 10){
          historyFiltered.current = historyFiltered.current.sort((a, b) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0))
        }
        if(sort === 20){
          historyFiltered.current = historyFiltered.current.sort((b, a) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0))
        }
      }  
      setHistoryList(historyFiltered.current)

    }else{

      productsFiltered.current = products;

      if(searchTerm){
        productsFiltered.current = productsFiltered.current.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      if(priceRange){
        productsFiltered.current = productsFiltered.current.filter(product => product.cost >= priceRange[0] && product.cost <= priceRange[1]);
      }
      if(searchCategory){
        productsFiltered.current = productsFiltered.current.filter(product => searchCategory.indexOf(product.category) > -1)
      }
      if(sort){
        if(sort === 10){
          productsFiltered.current = productsFiltered.current.sort((a, b) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0))
        }
        if(sort === 20){
          productsFiltered.current = productsFiltered.current.sort((b, a) => (a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0))
        }
      }  
      setProductList(productsFiltered.current)
    }
    
  }, [searchTerm, priceRange, searchCategory, sort, products, history, historyQuery, dateFrom, dateTo]);
    
  const paginate = usePagination(productList, historyList, ITEMSPERPAGE);
  const {currentData, currentHistoryData} = paginate; 
    
  const warning = () => {
    return (
      <article className="message is-warning">
        <div className="message-body">
          No se han encontrado productos con los criterios definidos
        </div>
      </article>
    );
  };

  if (hasError) {
      return (
      <div>
          <h6>Error al buscar las noticias</h6>
      </div>
      );
  }

  if (isLoading) {
      return (
      <div>
          <h2>Loading...</h2>
      </div>
      );
  }
  
  
  return (
    <section className="section">
      <div className="products-container">    
        {historyQuery ?
          historyList.length > 0
            ? currentHistoryData().map((product, i) => (
                <ProductHistory
                  key={i}
                  name={product.name}
                  price={product.cost}
                  photo={product.img.hdUrl}
                  category={product.category}
                  date={product.createDate}
                />
            ))
            : warning()
        : 
        productList.length > 0
          ? currentData().map((product, i) => (
              product._id === currentExchangingId ?
              exchangeIsLoading ? <Exchanging key={i} /> 
                : 
                exchangeHasError ? <ErrorExchange key={i} message={message}/> : <SuccessExchange key={i} />

              :
              product._id === currentId ?
                <Exchange
                  key={i}
                  productId={product._id}
                  name={product.name}
                  price={product.cost}
                  photo={product.img.hdUrl}
                  category={product.category}
                /> 
              :
                <Product
                  key={i}
                  productId={product._id}
                  name={product.name}
                  enabledPoints={user.points}
                  price={product.cost}
                  photo={product.img.hdUrl}
                  category={product.category}
                />
            ))
          : warning() 
        }
      </div>
      {currentPage === 1 ? (
          <IconButton aria-label="delete">
            <IconNext />
          </IconButton>
        ) : (
          <IconButton aria-label="delete">
            <IconPrev />
          </IconButton>
      )}
    </section>
  );
}


export default ProductsList;
