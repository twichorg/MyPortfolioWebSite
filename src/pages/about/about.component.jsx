import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/resimler/1605008673948.jpg'
import './about.component.style.css'
import Button from 'react-bootstrap/Button'


const About = () => {
    return (
        <div id='about'>
         <div className="about">
          <h1 className="pt-3 text-center font-details pb-3"> <strong>About Me</strong></h1>
           <Container>
             <Row className="pt-3 pb-5 align-items-center">
               <Col xs={12} md={6} >
                 <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                 </Row>
               </Col>
                 <Col xs={12} md={6}>
                   <Row className=" align-items-start p-2 my-details rounded">
                   <div className="write">
                   Hello, I'm <strong>&nbsp;Can Akturk.</strong>
                   <br/> &nbsp; &nbsp; &nbsp; I'm 24 years old. I was born on April 24 1996. I graduated from primary school in Dumlupınar and high school from Ankara Halide Edip.
                   <br/>&nbsp; &nbsp; In 2015, I won Afyon Kocatepe University business administration department.
                    In 2017, I started the second university is, Anadolu University Information Systems (continues). 
                    <br/> &nbsp; &nbsp; I graduated from Kocatepe University in 2019.
                   <br/> &nbsp; &nbsp; I am interested in software that I loved very much since high school days.
                    I decided that my area of ​​interest was frontend and I developed myself in that area.
                   <br/> &nbsp; &nbsp;I love learning about new technologies, 
                    what problems are they solving and How can I use them to build better and scalable products.
                    My areas of expertise are : <strrong>React.js, Redux, Gatsby, Node.js.</strrong> 
                    </div> 
                   </Row>
                     <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                           <div>
                             <a href="#contact">
                               <Button className="m-2" variant="outline-secondary">
                               Let's Talk
                               </Button> 
                             </a>
                           </div>
                           <div>
                  </div>
                  <div>
                    <a href="https://github.com/twichorg" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/can-akt%C3%BCrk-28bb77188/?locale=en_US" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                        </Col>
                     </Row>
                 </Col>
             </Row>
           </Container>
        </div>
         </div>
    )
}

export default About;