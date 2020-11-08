import React, {useState, useEffect, useContext} from "react";
import { AppContext } from "../components/ContextProvider";

import Product from "./Product";


const ProductsList = ({ products, history, hasError, isLoading, match }) => {

  const {searchTerm} = useContext(AppContext);
  let productsFiltered = products;
  
  if(searchTerm){
    productsFiltered = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  } 
  console.log("products filtered: ", productsFiltered)
  // console.log("history: ", history)

  // este efecto se ejecuta cada vez que hay un cambio en toda la aplicación
  useEffect(() => {
    // console.count(
    //   "Este efecto corre siempre que haya un cambio en toda la aplicación"
    // );

    // const { categoryId: currentCategoryId } = match.params;

    // if (currentCategoryId !== prevProps.match.params.categoryId) {
    //   this.props.getproductsByCategory(currentCategoryId);
    // }
  }); 
    

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
