import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import TitleBanner from "./TitleBanner";
import { makeStyles, Link } from "@material-ui/core";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
let imgUrls = [{
  "id":"1",
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
    "id":"2",
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
        "title":"LingoCampus",
        "url":'http://lingoyesacademy.com.co/wp-content/uploads/2021/04/bannerPrueba.jpg',
        "yopal":'Yopal',
        "linkYopal":'https://wa.link/yjuqmh ',
        "sogamoso":'Sogamoso',
        "linkSogamoso":'https://wa.link/mh4pk9 ',
    }
  }]

const useStyles = makeStyles(() => ({
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
  },
  PositionButton: {
    marginLeft: '2%',
  },
  inlineButton:{ 
    display: 'flex',
    zIndex: '10',
    flexWrap: 'nowrap',
    position: 'relative',
    transform: 'translate(30%, -950%)',
  },
  wpCenter: {
    transform: 'translatey(8px)',
  }

}));
function Banner() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Banner}>
        <div className="App">

          <Carousel breakPoints={breakPoints}>

            {
              imgUrls.map((data, index) => {
                
                return (
                  <div>
                      <div className='gallery-card'>
                        <Item> <img className='gallery-thumbnail' src={data.attributes.url} alt={'Image number ' + (index + 1)} /></Item>
                        <TitleBanner><h2>{data.attributes.title}</h2></TitleBanner>
                        <div className={classes.inlineButton}>
                          <Link className={classes.PositionButton}><a target="_blank" href={data.attributes.linkYopal} className={classes.buttonStyle}><WhatsAppIcon style={{fontSize:"1.5em"}} className={classes.wpCenter}/> {data.attributes.yopal}</a></Link>
                          <Link className={classes.PositionButton}><a target="_blank" href={data.attributes.linkSogamoso} className={classes.buttonStyle}><WhatsAppIcon style={{fontSize:"1.5em"}} className={classes.wpCenter}/> {data.attributes.sogamoso}</a></Link>
                        </div>
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

