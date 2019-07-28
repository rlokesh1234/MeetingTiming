import React, { Component } from "react";
import Slider from "react-slick";
import GeneralManager from './generalManager';
import SeniorManager from './seniorManagers';
import Manager from './managers';
import TeamLeader from './TeamLeaders';


export default class SimpleSlider extends Component {
  render() {
    let Data = null
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    if(this.props.type=='generalManager'){
       Data = (
         <Slider {...settings}>
           {Object.keys(this.props.data).map(val=><GeneralManager data={this.props.data[val]}/>)}
       </Slider>
     )
    }

    if(this.props.type=='seniorManager'){
       Data = (
         <Slider {...settings}>
           {Object.keys(this.props.data).map(val=><SeniorManager widget={this.props.data[val]}/>)}
       </Slider>
     )
    }

    if(this.props.type=='Manager'){
       Data = (
         <Slider {...settings}>
           {Object.keys(this.props.data).map(val=><Manager data={this.props.data[val]}/>)}
       </Slider>
     )
    }

    if(this.props.type=='TeamLeader'){
       Data = (
         <Slider {...settings}>
           {Object.keys(this.props.data).map(val=><TeamLeader data={this.props.data[val]}/>)}
       </Slider>
     )
    }
//console.log(this.props.data,'gen')
    return (
      <div>

        {Data}
      </div>
    );
  }
}
