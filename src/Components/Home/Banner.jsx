import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { makeStyles } from "@material-ui/core";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];
let imgUrls = [
  'https://source.unsplash.com/k3IogSsONd4/800x600',
  'https://source.unsplash.com/gThfDnqgfMw/800x600',
  'https://source.unsplash.com/_1x_x8Vtg2w/800x600',
  'https://source.unsplash.com/TFP_s4_jRuE/800x600',
  'https://source.unsplash.com/pElM4yerF5Q/800x600',
  'https://source.unsplash.com/sFsy8CKyQ5c/800x600',
  'https://source.unsplash.com/0WGucY1VHI0/800x600',
  'https://source.unsplash.com/1ciHU-qPifY/800x600',
  'https://source.unsplash.com/JZCJotPa96c/800x600',
  'https://source.unsplash.com/8X19catOuNI/800x600',
  'https://source.unsplash.com/_GDff35-Pa8/800x600',
  'https://source.unsplash.com/XYok1nBGvhk/800x600'
]

const useStyles = makeStyles(() => ({
  Banner: {
    width: '100%',
    margintop: '100vh',
    padding: '10px'
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
              imgUrls.map((url, index) => {
                return (
                  <div>
                      <div className='gallery-card'>
                        <Item> <img className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} /></Item>
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

