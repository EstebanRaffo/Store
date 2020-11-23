import React, {useState, useRef, useEffect, useContext} from "react";
import { AppContext } from "../components/ContextProvider";

import Product from "./Product";
import Exchange from "./Exchange";
import ProductHistory from "./ProductHistory";
import Moment from "moment";
import "moment/locale/es";

const ProductsList = ({ products, user, history, hasError, isLoading, match }) => {
  const {searchTerm, priceRange, searchCategory, sort, currentId, historyQuery, dateRange} = useContext(AppContext);
  let productsFiltered = useRef(null);
  let historyFiltered = useRef(null);
  const [productList, setProductList] = useState([]);
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    productsFiltered.current = products;
    console.log("products filtered antes del filtro: ", productsFiltered.current)

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

    if(historyQuery){
      console.log("dateRange: ", dateRange)
      historyFiltered.current = history;
      // console.log("createDate: ", historyFiltered.current[0].createDate)
      console.log("createDate formato Moment: ", Moment(historyFiltered.current[0].createDate).format("YYYY-MM-DD"))
      console.log("history filtered antes del filtro: ", historyFiltered.current)

      if(searchTerm){
        historyFiltered.current = historyFiltered.current.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      if(priceRange){
        historyFiltered.current = historyFiltered.current.filter(product => product.cost >= priceRange[0] && product.cost <= priceRange[1]);
      }
      if(dateRange){
        historyFiltered.current = historyFiltered.current.filter(product => Moment(product.createDate).format("YYYY-MM-DD") >= dateRange[0] && Moment(product.createDate).format("YYYY-MM-DD") <= dateRange[1]); 
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
    }
    
  }, [searchTerm, priceRange, searchCategory, sort, products, history, historyQuery, dateRange]);
 
  console.log("products filtered despues del filtro: ", productsFiltered.current)
  console.log("history filtered despues del filtro: ", historyFiltered.current)

  console.log("user: ", user)
    

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
            ? historyList.map((product, i) => (
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
          ? productList.map((product, i) => (
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
          : warning()}
      </div>
    </section>
  );
}


export default ProductsList;
