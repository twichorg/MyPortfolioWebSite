import React from 'react';
import './my-carousal.style.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from  '../../assets/resimler/../nikolay-tarashchenko-u76CN5rZeOU-unsplash.jpg';
import Slide2 from  '../../assets/resimler/sam-pak-WIeJcQrd3Tw-unsplash.jpg';
import Slide3 from  '../../assets/resimler/xps-yNvVnPcurD8-unsplash.jpg';
import ScrollDown from '../../components/scroll-down/scroll-down.component';


const MyCarousal = () => {
    return (
     <div id="home">
     <Carousel controls={false} indicators interval={4790} pause={false}>
     <Carousel.Item>
       <img
         className="d-block w-100 custom-img "
         src={Slide2}
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100 custom-img "
         src={Slide3}
         alt="Second slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100 custom-img "
         src={Slide1}
         alt="Third slide"
       />
     </Carousel.Item>
   </Carousel>
   <ScrollDown/>
     </div>
    )
}

export default MyCarousal;