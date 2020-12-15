import React, {useContext} from "react";
import { AppContext } from "./ContextProvider";

import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme) => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));

const FilterByName = () => {
    const classes = useStyles();
    const {searchTerm, setSearchTerm} = useContext(AppContext);

    const handleChange = ({target: {value}}) => {
        setSearchTerm(value);
    };

    return (
      <div>
        <AppBar position="static" color="transparent">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={searchTerm}
                onChange={handleChange}
              />
            </div>      
        </AppBar>
      </div>
    );
};
  
export default FilterByName;