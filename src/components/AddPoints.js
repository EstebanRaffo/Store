import React, { useContext } from "react";
import { AppContext } from "./ContextProvider";
import "../styles/AddPoints.css";
import {addPoints} from "../actions/actions";
import PointValue from "./PointValue";

const Modal = () => {
  const { show, setShow } = useContext(AppContext);
  const {pointsSelected, setPoints} = useContext(AppContext);

  const className = show ? "modal-content" : "modal-hidden";
  const background = show ? "modal-background" : "";
  

  const handleClose = () => {
    setShow(!show);
  };


  const sendPoints = () => {
    console.log("pointsSelected: ", pointsSelected)
    setShow(!show);
    addPoints(pointsSelected);
  };

  return (
      <div className={background}>
        <div className="centered">
          <div className={className}>
            <PointValue point={1000} initial={true}/>
            <PointValue point={5000} initial={false}/>
            <PointValue point={7500} initial={false}/>
            <span className="cerrar" onClick={handleClose}>
                {" "}
                X{" "}
            </span>
            <div>
              <button id="search" className="btn btn-outline-secondary" type="button" onClick={() => sendPoints()}>
                sumar
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Modal;
