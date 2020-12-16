import React, {useContext} from "react";
import { connect } from "react-redux";
import { AppContext } from "./ContextProvider";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

const setCategoriesSelector = (products, history, historyQuery) => {
  let categories = [];

  if(historyQuery){
    for(const product of history){
      if(categories.indexOf(product.category) < 0){
        categories.push(product.category)
      }
    }
  }else{
    for(const product of products){
      if(categories.indexOf(product.category) < 0){
        categories.push(product.category)
      }
    }
  }

  return categories;
}

const FilterByCategory = ({products, history}) => {
    const {setCategories, historyQuery} = useContext(AppContext);
    const classes = useStyles();

    const handleChange = (event, value) => {
      value.length > 0 ? setCategories(value) : setCategories("")
    };

    return (
      <div className={classes.root}>
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={setCategoriesSelector(products, history, historyQuery)}
          getOptionLabel={(option) => option}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="categorias"
              placeholder="Favorites"
            />
          )}
        />
      </div>
    );
};

const mapStateToProps = (state) => {
  return{
    products: state.products,
    history: state.history
  }
}


export default connect(mapStateToProps)(FilterByCategory);