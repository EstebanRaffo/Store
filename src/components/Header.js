import React, { useContext } from "react";
import { Link, Switch, Route, MemoryRouter } from "react-router-dom";
import { connect } from "react-redux";
import History from "./History";
import Home from "./Home";
import User from "../containers/User";
import { getUser } from "../actions/actions";
import { AppContext } from "./ContextProvider";
// import {Container, Row, Col} from "react-bootstrap"; 

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({getUser}) => {
  const { show, setShow } = useContext(AppContext);

  React.useEffect(() => {
    console.count("Se ejecutó getUser()");
    getUser();
  });

  return (
    <div className="header">
      {/* <Container>
        <Row>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>
      </Container> */}
      {/* <Container>
        <Row>
          <Col lg={true}>Home</Col>
          <Col lg={true}>History</Col>
          <Col lg={true}>Add Points</Col>
          <Col lg={true}>User</Col>
        </Row>
      </Container> */}
      {/* <div className="row">
        <div className="col">Home</div>
        <div className="col">History</div>
        <div className="col">Add Points</div>
        <div className="col">User</div>
      </div> */}

      <nav className="navbar">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/user/history">
            History
          </Link>
        </div>
      </nav>
      
      <Switch>
        <Route path="/user/history" component={History} />
      </Switch>
      <div>
        <button className="action" onClick={() => setShow(!show)}>
          Add Points
        </button>
      </div>
      <User/>
                    
    </div>
  //   <MemoryRouter>
  //   <Container className="p-3">
  //     <Jumbotron>
  //       {/* <h1 className="header">Welcome To React-Bootstrap</h1> */}
  //       <h2>
  //         <Switch>
  //           <Route path="/">
  //             <Home />
  //           </Route>
  //           <Route path="/user/history">
  //             <History />
  //           </Route>
  //         </Switch>
  //       </h2>
  //       <h2>
  //         <ButtonToolbar className="custom-btn-toolbar">
  //           <LinkContainer to="/">
  //             <Button>Home</Button>
  //           </LinkContainer>
  //           <LinkContainer to="/user/history">
  //             <Button>History</Button>
  //           </LinkContainer>
  //         </ButtonToolbar>
  //       </h2>
  //     </Jumbotron>
  //   </Container>
  //   <div>
  //     <button className="action" onClick={() => setShow(!show)}>Add Points</button>
  //   </div>
  //   <User/>
  // </MemoryRouter>
  );
};

const mapDispatchToProps = {
  getUser
};

export default connect(null, mapDispatchToProps)(Header);