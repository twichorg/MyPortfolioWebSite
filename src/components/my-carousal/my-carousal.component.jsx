import React from 'react';
import './my-carousal.style.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide2 from  '../../assets/resimler/sam-pak-WIeJcQrd3Tw-unsplash.jpg';
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
   </Carousel>
   <ScrollDown/>
     </div>
    )
}

export default MyCarousal;