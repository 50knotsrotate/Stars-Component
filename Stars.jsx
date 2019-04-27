import React, {Component} from 'react';
import Star from './Star';
import '../App.css';

export default class Stars extends Component {
  constructor(){
    super()

    this.state = {
        num : 0,
        submitted: false,
        starCount: 6
    }
  }

  componentDidMount(){
    if(this.props.starCount){
    this.setState({
      starCount: this.props.starCount+1
    })
    }
  }

  hover = num => {
    if(!this.state.submitted){
    this.setState({
      num
    })
    }
  }

  submitRating = num => {
    this.setState({
      submitted: true
    })
  }

  render(){
    const stars = []
    for(let i = 1; i < this.state.starCount; i++){
      stars.push(<Star isLit = {this.props.rating ? i <= this.props.rating : this.state.num >= i } hover = {() => this.hover(i)} submit = {() => this.submitRating(i)} /> )
    }   

     return(
    <div className = 'stars'>
      {stars}
    </div>
  )  
    
  }

}
