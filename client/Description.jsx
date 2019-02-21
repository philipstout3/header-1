import React from 'react'
import styled from 'styled-components';


const ParagraphText = styled.div`
  color: #2d333f;
  margin-top: 20px;
`


class Description extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div style={{display:'flex', justifyContent:'flex-start', marginTop:'px'}}>
        <ParagraphText>Hello fasdf sad</ParagraphText>
      </div>
    )
  }
}

export default Description;