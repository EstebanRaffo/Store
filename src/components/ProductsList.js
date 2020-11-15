import React, {useRef, useEffect, useContext} from "react";
import { AppContext } from "../components/ContextProvider";

import Product from "./Product";


const ProductsList = ({ products, history, hasError, isLoading, match }) => {

  const {searchTerm, priceRange, searchCategory, sort} = useContext(AppContext);
  let productsFiltered = useRef(null);
  
  
  useEffect(() => {
    productsFiltered.current = products;
    console.log("products filtered antes del filtro: ", productsFiltered)

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
    
  }, [searchTerm, priceRange, searchCategory, sort, products]);
  
  console.log("products filtered despues del filtro: ", productsFiltered)



  // console.log("history: ", history)

  // este efecto se ejecuta cada vez que hay un cambio en toda la aplicación
  //useEffect(() => {
    // console.count(
    //   "Este efecto corre siempre que haya un cambio en toda la aplicación"
    // );

    // const { categoryId: currentCategoryId } = match.params;

    // if (currentCategoryId !== prevProps.match.params.categoryId) {
    //   this.props.getproductsByCategory(currentCategoryId);
    // }
  //}); 
    

//   warning = () => {
//     return (
//       <article className="message is-warning">
//         <div className="message-body">
//           No se han encontrado productos con los criterios definidos
//         </div>
//       </article>
//     );
//   };

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
      <div className="report-container">
          <h3>Lista de Productos</h3>
        {/* {products.length > 0
          ? products.map((report, i) => (
              <Product
                key={i}
                title={report.title}
                daily={report.source_name}
                photo={report.img_url}
                url={report.url}
                category={report.category}
              />
            ))
          : this.warning()} */}
      </div>
    </section>
  );
}


export default ProductsList;
