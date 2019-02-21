import React from 'react'
import styled from 'styled-components';


const TagText = styled.div`
font-size: 1.125rem;
font-family: sans-serif;
//font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`

class Tags extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div style={{display:'flex', justifyContent:'flex-start'}}>
        <TagText>Top Tags:</TagText>
        <div>This is where he buttons will go</div>
      </div>
    )
  }
}

export default Tags;