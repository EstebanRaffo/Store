import React, { useContext, useState } from "react";
import { AppContext } from "./ContextProvider";
import "../styles/AddPoints.css";
import { addPoints } from "../actions/actions";
import {useDispatch} from "react-redux";
import {ButtonGroup, ToggleButton} from 'react-bootstrap'; 

const Modal = () => {
  const { show, setShow } = useContext(AppContext);
  const [radioValue, setRadioValue] = useState("1000");

  const className = show ? "modal-content" : "modal-hidden";
  const background = show ? "modal-background" : "";
  
  const radios = [
    { name: '1000', value: '1000' },
    { name: '5000', value: '5000' },
    { name: '7500', value: '7500' },
  ];

  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(!show);
  };

  const sendPoints = () => {
    console.log("pointsSelected enviados: ", radioValue)
    setShow(!show);
    dispatch(addPoints(+radioValue));
  };

  return (
      <div className={background}>
        <div className="centered">
          <div className={className}>
            <span className="cerrar" onClick={handleClose}>X</span>
            <h3>¿Cuántos puntos sumamos?</h3>
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>

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
