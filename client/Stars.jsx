import React from 'react';
import styled from 'styled-components';

const Checked = styled.div`
  color: #da3743;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`

const HalfCheck = styled.div`
  color: #da3743;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`

const UnChecked = styled.div`
  color: #6f737b;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`

class Stars extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      // TODO: CREATE STARS WITHOUT EXTERNAL LIB, ACCOUNT FOR RATINGS LOWER THAN 3

      <div style={{display:'flex', justifyContent: "flex-start"}}>
        <Checked className="fa fa-star"></Checked>
        <Checked className="fa fa-star"></Checked>
        <Checked className="fa fa-star"></Checked>
        <HalfCheck className="fa fa-star-half-alt" style={{display: this.props.restaurant.rating < 4 ? "block" : "none"}}></HalfCheck>
        <UnChecked className="fa fa-star" style={{display: this.props.restaurant.rating < 4 ? "block" : "none"}}></UnChecked>
        <Checked className="fa fa-star" style={{display: this.props.restaurant.rating > 4 ? "block" : "none"}}></Checked>
        <HalfCheck className="fa fa-star-half-alt" style={{display: this.props.restaurant.rating > 4 ? "block" : "none"}}></HalfCheck>
      </div>


      // <div>
      //   <Checked className="fa fa-star"></Checked>
      //   <Checked className="fa fa-star"></Checked>
      //   <Checked className="fa fa-star"></Checked>
      //   <Checked className="fa fa-star"></Checked>
      //   <HalfCheck className="fa fa-star-half"></HalfCheck>
      // </div>
    )
  }
}

export default Stars