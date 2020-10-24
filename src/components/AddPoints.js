import React, { useContext } from "react";
import { AppContext } from "./ContextProvider";
import "../styles/AddPoints.css";
import {addPoints} from "../actions/actions";

const Modal = () => {
  const { show, setShow } = useContext(AppContext);
  const {points, setPoints} = useContext(AppContext);

  const className = show ? "modal-content" : "modal-hidden";
  const background = show ? "modal-background" : "";

  const handleClose = () => {
    setShow(!show);
    // setBook("");
  };

  const sendPoints = () => {
    // const newBook = { id: uniqueId(), nombre: book, leido: false };
    // const newBookList = [...libros, newBook];
    // setLibros(newBookList);
    console.log(points)
    // addPoints(points)
    // setShow(!show);
    // setBook("");
  };

  return (

      <div className={background}>
        <div className="centered">
          <div className={className}>
            {/* <h3>Select Points</h3> */}
            {/* <div>
                <div>
                    <input type="radio" defaultChecked onChange={() => setPoints(1000)}/>
                    <label>1000</label>
                </div>
                
                <div>
                    <input type="radio" onChange={() => setPoints(5000)}/>
                    <label>5000</label>
                </div>
                
                <div>
                    <input type="radio" onChange={() => setPoints(7500)}/>
                    <label>7500</label>
                </div>
            </div>
            <div>
                <button className="action" onClick={() => sendPoints()}>
                add
                </button>
            </div> */}
            {/* <form>
                <fieldset>
                    <legend>Please select your preferred contact method:</legend>
                    <div>
                        <input type="radio" checked onClick={() => setPoints(1000)}/>
                        <label>1000</label>

                        <input type="radio" onClick={() => setPoints(5000)}/>
                        <label>5000</label>

                        <input type="radio" onClick={() => setPoints(7500)}/>
                        <label>7500</label>
                    </div>
                    <div>
                        <button type="submit" onSubmit={() => sendPoints()}>Submit</button>
                    </div>
                </fieldset>
                <span className="cerrar" onClick={handleClose}>
                {" "}
                X{" "}
                </span>
            </form> */}
            <form>
                <fieldset>
                    <legend>Please select your preferred contact method:</legend>
                    <div>
                    <input type="radio" id="contactChoice1"
                    name="contact" value="email" checked/>
                    <label for="contactChoice1">Email</label>

                    <input type="radio" id="contactChoice2"
                    name="contact" value="phone"/>
                    <label for="contactChoice2">Phone</label>

                    <input type="radio" id="contactChoice3"
                    name="contact" value="mail"/>
                    <label for="contactChoice3">Mail</label>
                    </div>
                    <div>
                    <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Modal;
