import React, { useContext, useState } from "react";
import { AppContext } from "./ContextProvider";
import "../styles/AddPoints.css";
import {addPoints} from "../actions/actions";
import PointValue from "./PointValue";
import Score from "./Score";

const Modal = () => {
  const { show, setShow } = useContext(AppContext);
  const [pointsSelected, setPoints] = useState(1000);

  const [firstSelected, setFirst] = useState(true);
  const [secondSelected, setSecond] = useState(false);
  const [thirdSelected, setThird] = useState(false);

  const className = show ? "modal-content" : "modal-hidden";
  const background = show ? "modal-background" : "";
  
  const handleClose = () => {
    setShow(!show);
  };

  const toggleSelected = (selected, point) => {
    switch (point){
      case 1000:
        setFirst(selected);
        setSecond(!selected);
        setThird(!selected);
        setPoints(point);
        break;
      case 5000:
        setSecond(selected);
        setFirst(!selected);
        setThird(!selected);
        setPoints(point);
        break;
      case 7500:
        setThird(selected);
        setFirst(!selected);
        setSecond(!selected);
        setPoints(point);
        break;
      default:
    }
  }

  const sendPoints = () => {
    console.log("pointsSelected: ", pointsSelected)
    setShow(!show);
    addPoints(pointsSelected);
  };

  return (
      <div className={background}>
        <div className="centered">
          <div className={className}>
            {/* <PointValue point={1000} selected={firstSelected} syncup={toggleSelected}/>
            <PointValue point={5000} selected={secondSelected} syncup={toggleSelected}/>
            <PointValue point={7500} selected={thirdSelected} syncup={toggleSelected}/> */}
            <Score />
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
