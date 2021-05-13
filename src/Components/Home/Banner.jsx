import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import TitleBanner from "./TitleBanner";
import { makeStyles, Link, Grid } from "@material-ui/core";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Theme } from '@material-ui/core/styles';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
let imgUrls = [
  {
    "id":"1",
    "attributes": {
        "title":"Bienvenido a LingoCampus",
        "url":'http://lingoyesacademy.com.co/wp-content/uploads/2021/04/bannerComunity.jpg',
        "yopal":'Yopal',
        "linkYopal":'https://wa.link/yjuqmh ',
        "sogamoso":'Sogamoso',
        "linkSogamoso":'https://wa.link/mh4pk9 ',
    }
  },
  {
  
  "id":"2",
  "attributes": {
      "title":"Teacher a Domicilio",
      "url":'http://lingoyesacademy.com.co/wp-content/uploads/2021/04/bannerPrueba.jpg',
      "yopal":'Yopal',
      "linkYopal":'https://wa.link/yjuqmh ',
      "sogamoso":'Sogamoso',
      "linkSogamoso":'https://wa.link/mh4pk9 ',
    }
  },
  {
    "id":"3",
    "attributes": {
        "title":"Club Conversacional",
        "url":'http://lingoyesacademy.com.co/wp-content/uploads/2021/04/bannerPrueba2.jpg',
        "yopal":'Yopal',
        "linkYopal":'https://wa.link/yjuqmh ',
        "sogamoso":'Sogamoso',
        "linkSogamoso":'https://wa.link/mh4pk9 ',
    }
  },
  {
    "id":"3",
    "attributes": {
        "title":"Intercambios con LingoYes",
        "url":'http://lingoyesacademy.com.co/wp-content/uploads/2021/04/bannerItercambios.jpg',
        "yopal":'Yopal',
        "linkYopal":'https://wa.link/yjuqmh ',
        "sogamoso":'Sogamoso',
        "linkSogamoso":'https://wa.link/mh4pk9 ',
    }
  },
  {
    "id":"3",
    "attributes": {
        "title":"LingoYes Your Community",
        "url":'http://lingoyesacademy.com.co/wp-content/uploads/2021/04/bannerWebCo.jpg',
        "yopal":'Yopal',
        "linkYopal":'https://wa.link/yjuqmh ',
        "sogamoso":'Sogamoso',
        "linkSogamoso":'https://wa.link/mh4pk9 ',
    }
  }]

const useStyles = makeStyles((theme) => ({
  Banner: {
    width: '100%',
    margintop: '100vh',
    padding: '10px',
  },

  buttonStyle: {
    textDecoration: 'none',
    borderRadius: '10vw',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '20px 50px',
    fontSize: '1.5em',
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.8em',
      padding: '10px 25px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.8em',
      padding: '10px 25px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.up('lg')]: {
      
    },
  },
  PositionButton: {
    marginLeft: '2%',
    [theme.breakpoints.up('xs')]: {
      marginBottom: '20px',
      
    },
  },
  inlineButton:{ 
    display: 'flex',
    zIndex: '10',
    flexWrap: 'nowrap',
    position: 'relative',
    transform: 'translate(31.5%, -650%)',
    [theme.breakpoints.up('xs')]: {
      display: 'table',
      width: '10%',
      flexWrap:'inherit',
      transform: 'translate(450%, -420%)',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'table',
      width: '10%',
      flexWrap:'inherit',
      transform: 'translate(450%, -240%)',
    },
    [theme.breakpoints.up('md')]: {
      width: '25%',
      display: 'flex',
      flexWrap: 'nowrap',
      transform: 'translate(155%, -450%)',
    },
    [theme.breakpoints.up('lg')]: {
      transform: 'translate(150%, -580%)',
    },
  },
  wpCenter: {
    transform: 'translatey(8px)',
  },
  cajatitleBanner: {
    [theme.breakpoints.up('xs')]: {
      width: '10% !important',
      margin: '0 !important',
      position: 'relative',
      transform: 'translate(450%, -270%) !important',
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    [theme.breakpoints.up('sm')]: {
      width: '30% !important',
      margin: '0 !important',
      position: 'relative',
      transform: 'translate(118%, -470%) !important',
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    [theme.breakpoints.up('md')]: {
      transform: 'translate(75%, -240%) !important',
      width: '40% !important',
    },
    [theme.breakpoints.up('lg')]: {
      transform: 'translate(75%, -250%) !important',
    },
  },
  titleBanner: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
      
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6em',
      
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3em',
    },
    [theme.breakpoints.up('lg')]: {
      
    },
  },

}));
function Banner() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Banner}>
        <div className="App">

          <Carousel breakPoints={breakPoints} >

            {
              imgUrls.map((data, index) => {
                
                return (
                  <div>
                      <div container className='gallery-card'>
                        <Grid item xs={12} sm={12} lg={12}>
                          <Item> <img className='gallery-thumbnail' src={data.attributes.url} alt={'Image number ' + (index + 1)} /></Item>
                          <TitleBanner  className={classes.cajatitleBanner}><h2 className={classes.titleBanner}>{data.attributes.title}</h2></TitleBanner>
                          <div className={classes.inlineButton}>
                            <div className={classes.PositionButton}><a target="_blank" href={data.attributes.linkYopal} className={classes.buttonStyle}><WhatsAppIcon style={{fontSize:"1.5em"}} className={classes.wpCenter}/> {data.attributes.yopal}</a></div>
                            <div className={classes.PositionButton}><a target="_blank" href={data.attributes.linkSogamoso} className={classes.buttonStyle}><WhatsAppIcon style={{fontSize:"1.5em"}} className={classes.wpCenter}/> {data.attributes.sogamoso}</a></div>
                          </div>
                        </Grid>
                      </div>
                    
                  
                  </div>
                )
              })

            }
          </Carousel>
        </div>

      </div>
    </>
  );
}

export default Banner;

