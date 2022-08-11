import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImg from '../assets/img/img2.jpg';
import secondImg from '../assets/img/img1.jpg';
import thirdImg from '../assets/img/img3.jpg';
import './CarouselBoot.css';


export class BootstrapCarousel extends Component {  
  render() {
    return (
      <div>  
        <div class='container-fluid' >  
          <div className="row title" style={{ marginBottom: "2%" }} >
          </div>
        </div>
      <div className='container-fluid' >  
        <Carousel>
          <Carousel.Item style={{'height':"93vh"}} >
            <img
              style={{'height':"93vh"}}
              className="d-block w-100"
              src={firstImg} alt="no image2"/>
            <Carousel.Caption>
              <h3>First Carousel.Caption </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{'height':"93vh"}}>
            <img style={{'height':"93vh"}}
              className="d-block w-100"
              src={secondImg} alt="no image1"/>
            <Carousel.Caption>
              <h3>Second Carousel.Caption</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{'height':"93vh"}}>
            <img style={{'height':"93vh"}}
              className="d-block w-100"
              src={thirdImg} alt="no image3"/>
            <Carousel.Caption>
              <h3>Third Carousel.Caption</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    )
  }
};

export default BootstrapCarousel;