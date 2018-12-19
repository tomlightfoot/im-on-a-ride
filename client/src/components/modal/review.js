import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './InfoBoxStyle.css'


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating_half_star: null,
      holder: null,
      feature: null,
      clicked: false
    };
  }

  componentDidMount() {
    fetch('/attractions/' + this.props.feature._id)
    .then(res => res.json())
    .then(data => {
      let thrillArray = data.thrill
      let reducer = (accumulator, currentValue) => accumulator + currentValue;
      let thrillAverage = Math.round((thrillArray.reduce(reducer)/thrillArray.length)*2)/2
      this.setState({rating_half_star: thrillAverage, holder: thrillAverage});
      this.setState({clicked: false})
    })
  }

  onStarClickHalfStar(nextValue, prevValue, name, e) {
    const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    this.setState({clicked: true});
    this.setState({rating_half_star: nextValue});
  }

  onStarHoverHalfStar(nextValue, prevValue, name, e) {
    const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    this.setState({rating_half_star: nextValue});
  }

  onStarHoverHalfStarOut(nextValue, prevValue, name, e) {
    const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

    if (this.state.clicked === false) {
      this.setState({rating_half_star: this.state.holder});
    }
  }

  submitReview() {
    fetch('/attractions/' + this.props.feature.name + '/' + this.state.rating_half_star, {
      method: 'PUT'
    }).then(res => {
      return res
    }).catch(err => err)

    this.props.callBackFromParent()
  }

  render() {
    return(
    <div className='reviewModal'>
      <h2>Feedback</h2>
      <p>Please click a rating:</p>
        <div style={{fontSize: 18}}>
          <StarRatingComponent
            name="app6"
            starColor="#ffb400"
            emptyStarColor="#ffb400"
            value={this.state.rating_half_star}
            onStarClick={this.onStarClickHalfStar.bind(this)}
            onStarHover={this.onStarHoverHalfStar.bind(this)}
            onStarHoverOut={this.onStarHoverHalfStarOut.bind(this)}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
                </span>
              );
            }}
            renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
                  <span><i className="fas fa-star-half" /></span>
                </span>
              );
            }} />
        </div>
        <button onClick={this.submitReview.bind(this)}>Submit review!</button>
    </div>
    )
  }
}

export default Review
