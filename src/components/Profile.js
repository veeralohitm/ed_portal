import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CreateIcon from '@material-ui/icons/Create';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import checklist from '../images/checklist.png';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:90,
      lineHeight:"28px",
      fontWeight:"600",
    },
    paper: {
      padding: theme.spacing(2),      
      backgroundColor: "#f2f9ff",
      padding:20,
    },
    circle:{
        background: "#2185d0",
        borderRadius: "50%",            
        color: "white",
        display: "block",    
        lineHeight: 6,
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        width: 180,
        fontSize: 30,
        marginBottom: 15,
    },
    userlist:{
        listStyle:"none",
        marginTop:15,
    },
    icnlist:{ 
        listStyle:"none",
        display: "inline",    
                  
        "&::after":{            
            display: "inline-block",
            height: "3px",
            content: "''",
            textShadow: "none",
            backgroundColor: "#999",
            width: "9%",
        },   
        
    },
    icnlast:{
        listStyle:"none",
        display: "inline",
    },
    bkgicn:{
        backgroundColor:"#d4d4d570",
        borderRadius:"50%",
        padding: 8,
        color: "black",
        '&:hover': {
            background: "rgb(44, 221, 44)",
            color:"black",
         },         
    },
    label:{
        color: "red",
    },
    chklst:{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "90px",
    },
    btn1:{
        backgroundColor: "#ffb506",
        color: "black" ,
        fontWeight: 700,
        marginTop:20,
    },
    chngtag:{
        textAlign:"center",
        marginTop:"10px",
    },
    profilepaper:{
        height:"100%",
        backgroundColor: "#f2f9ff",
        padding:20,
    },
    iclst:{
        marginTop:"30px",        
        marginLeft: "-30px",
        marginBottom: "0",
    },

    
  })); 

const Profile = () => {

 
    const classes = useStyles();
    
    return (  

    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>        
            <Grid item xs={12} md={6} sm={12}>
            <Paper className={classes.profilepaper}>
            <Grid container spacing={3}>  
                <Grid item xs={12} sm={6}>
                    <span className={classes.circle}>VL</span>
                    <p className={classes.chngtag}>Change your Avatar</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3  className={classes.chngtag}>USER PROFILE</h3>
                    <ul >
                        <li className={classes.userlist} >Username : Veera Lohit</li>
                        <li  className={classes.userlist}>Email: lohit@odu.edu</li>
                        <li  className={classes.userlist}>Gender : Male</li>
                        <li  className={classes.userlist}>Location: Hyderabad </li>
                    </ul>
                </Grid>  
            </Grid>         
            </Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
            <Paper className={classes.paper}>
                    <h3>CPCDP ACTIVITIES</h3>
                    <ul >
                             <li>Completed Pre Survey on <label className={classes.label}>Wednesday, December 31, 1969.</label> </li>
                            <li>Cultural Proficiency Continnum Q-Sort form is pending your comptletion.</li>
                            <li>Your facilitator's comments on your reactions are pending the facilitator's completion.(You will
                                receive an email notifying you to login into your profile and review your facilitator's reactions.
                            </li>
                            <li>Post-Survey is pending your completion.</li>
                    </ul>
                    <ul className={classes.iclst}>
                        <li className={classes.icnlist}><a className={classes.bkgicn}><CreateIcon /></a></li>
                        <li className={classes.icnlist}><a className={classes.bkgicn}><LibraryBooksIcon /></a></li>
                        <li className={classes.icnlist}><a className={classes.bkgicn}><CreateIcon /></a></li>
                        <li className={classes.icnlist}><a className={classes.bkgicn}><AddToPhotosIcon /></a></li>
                        <li className={classes.icnlist}><a className={classes.bkgicn}><BarChartIcon /></a></li>
                        <li className={classes.icnlast}><a className={classes.bkgicn}><MenuBookIcon /></a></li>

                    </ul>
            </Paper>
            </Grid>        

            <Grid item xs={12} sm={12}>
                <Paper className={classes.paper}>
                    <h3>Cultural Proficiency Continuum Q-Sort: A Majority-Minority PreK-12 Schooling Context
                    </h3>
                    <p>
                        Before  Engaging  with  the  Cultural  Proficiency  Continuum  Q-Sort  (CPCQ),  situate yourselfas a  new  teacher  in  a  U.S  public  school  that
                        educates  a  <b>majority - minority  student  population</b>. You  are   at  this  school  for an interview as  apotential  new  teacher.
                        The  principle  is  taking  you  on  a  tour  of  the  school  during  which  you  will  observe  a  variety  of  culturally  proficient interactions. While
                        you  are  completing  CPCQ,  consider  how you  may  react  to   these   interactions   during  your  tour.
                     </p>
                     <img src={checklist} className={classes.chklst}></img>
                     <Button variant="contained" className={classes.btn1}>
                                    CPCQ Directions
                    </Button>
                </Paper>
            </Grid>  
        </Grid>                        

      </Container>
    </div>

    );};

export default Profile;