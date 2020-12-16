import React, {useState, useRef, useEffect, useContext} from "react";
import { AppContext } from "../components/ContextProvider";
import Moment from "moment";
import "moment/locale/es";
import Product from "./Product";
import Exchange from "./Exchange";
import ProductHistory from "./ProductHistory";
import usePagination from "./Pagination";
import IconNext from "./IconNext";
import IconPrev from "./IconPrev";
import SuccessExchange from "./SuccessExchange";
import ErrorExchange from "./ErrorExchange";
import Exchanging from "./Exchanging";
import LoadingProducts from "./LoadingProducts";

import { IconButton } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';

import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

const ITEMS_PER_PAGE = 16;

const useStyles = makeStyles((theme) => ({
  warning: {
    fontSize: '400%',
    color: yellow[800]
  },
  error: {
    fontSize: '400%',
    color: '#d50000'
  }
}));

const ProductsList = ({ products, user, history, hasError, isLoading, exchangeHasError, exchangeIsLoading, exchange: {message} }) => {
  
  const {searchTerm, priceRange, searchCategory, sort, currentId, historyQuery, dateFrom, dateTo, currentPage, currentExchangingId} = useContext(AppContext);
  let productsFiltered = useRef(null);
  let historyFiltered = useRef(null);
  const [productList, setProductList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const classes = useStyles();
  
  
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
      
      historyFiltered.current = historyFiltered.current.sort((b, a) => (a.createDate > b.createDate ? 1 : a.createDate < b.createDate ? -1 : 0))

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
    
  const paginate = usePagination(productList, historyList, ITEMS_PER_PAGE);
  const {currentData, currentHistoryData} = paginate; 
    
  const warning = () => {
    return (
      <article className="message is-warning">
        <div className="message-body">
          <WarningIcon className={classes.warning}/>
          <h3>No se encontraron productos con los criterios definidos</h3>
        </div>
      </article>
    );
  };

  if(hasError) {
      return (
        <article className="message is-error">
          <div className="message-body">
            <ErrorIcon className={classes.error}/>
            {historyQuery ?
              <h3>Ocurrió un error al obtener el historial</h3>
            :
              <h3>Ocurrió un error al buscar los productos</h3>
            }
          </div>
        </article>
      );
  }

  if(isLoading) {
      return <LoadingProducts />
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
                exchangeHasError ? <ErrorExchange key={i} message={message}/>
              : 
                exchangeIsLoading ? <Exchanging key={i} /> : <SuccessExchange key={i} />

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
      <hr></hr>
      <div>
          {currentPage === 1 ? (
              <>
                {historyQuery ?
                  historyList.length > 16 ?
                      <IconButton aria-label="next">
                        <IconNext />
                      </IconButton>
                    :
                      ("")
                  :
                  productList.length > 16 ?
                      <IconButton aria-label="next">
                        <IconNext />
                      </IconButton>
                    :
                      ("")
                }
              </>
            ) : (
              <>
                <IconButton aria-label="prev">
                  <IconPrev />
                </IconButton>
              </>
          )}
      </div>
    </section>
  );
}

export default ProductsList;