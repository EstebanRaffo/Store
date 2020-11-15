import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AppContext } from "./ContextProvider";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function ButtonSizes() {
    const { show, setShow } = useContext(AppContext);
    const classes = useStyles();

  return (
    <div>
      <div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.margin}
          onClick={() => setShow(!show)}
        >
          sumar puntos
        </Button>
      </div>
    </div>
  );
}


