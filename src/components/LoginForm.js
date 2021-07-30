import React,{useState,useEffect} from 'react';
import logo from '../images/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button,Form } from 'react-bootstrap';
import { AuthContext } from "./App";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:100,
    },
    imgwidth:{
        width: 300,
        display: "block",
        margin: "auto",
    },
    center:{
        textAlign:"center",
        marginTop:20,
    },
  }));

function LoginForm() {
    const classes = useStyles();   
    const adminUser ={
        email: "admin@admin.com",
        password: "admin123"
    }

    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
      email: "",
      password: "",     
      
    };


    const [data, setData] = useState(initialState);

    const handleInputChange = event => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        });
      };  
    
const submitHandler = e =>{
    
    e.preventDefault();

    if(data.email == adminUser.email && data.password == adminUser.password){  
        localStorage.setItem('email', data.email);     
        dispatch({
            type: "LOGIN",            
        })  
      
    }
}

    return (        
           

        <div className={classes.root}>

                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}></Grid>
                        <Grid item xs={12} sm={4}>
                        <img src={logo} className={classes.imgwidth}></img>
                        <h2 className={classes.center}>Login</h2>                            
                        <Form onSubmit={submitHandler}>
                                                         
                            <Form.Group className="mb-3" >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" id="email" onChange={handleInputChange} value={data.email} />                                
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" id="password"  onChange={handleInputChange} value={data.password} />
                            </Form.Group>                            
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        </Grid>
                        <Grid item xs={12} sm={4}></Grid>
                    </Grid>
                 
               </Container>               
    
                </div>     
     
     
    )
    }
  export default LoginForm;