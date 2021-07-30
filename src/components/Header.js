import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../images/logo.png'; 
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from "./App";
const useStyles = makeStyles((theme) => ({
    imgwidth:{
        width: 150,
        margin:5,
    },
    a:{
        color: "black",
        marginRight: 20,
        fontWeight:"600",
        textDecoration: "none",
    },
  }));

const Header = () => {
 
   
    const classes = useStyles();
    const { state, dispatch } = React.useContext(AuthContext);
 
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light"  fixed="top" >
           
                <Navbar.Brand ><img src={logo} className={classes.imgwidth}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">      
                </Nav>
                <Nav >
                    <Nav.Link className={classes.a}>HOME</Nav.Link>
                    <Nav.Link to="/about"className={classes.a} >ABOUT US</Nav.Link>                   

                    <Nav.Link  className={classes.a} 
                    onClick={() =>
                                dispatch({
                                    type: "LOGOUT"
                                })
                                } >
                        {(state.isAuthenticated) ? ( 
                             <p>LOGOUT</p>
                            
                            ) : (
                     
                                <p>LOGIN</p>                       
                            )                                        
                            }                 
                         </Nav.Link>  </Nav>
            </Navbar.Collapse>
      
        </Navbar>
      </div>
      
      
    );
    };
  export default Header;