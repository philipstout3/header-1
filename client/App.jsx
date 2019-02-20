import React from 'react';
import styled from 'styled-components';


const Border = styled.div`
  display: flex;
  font-size: 1em;
  justify-content: space-around;
  padding-bottom: 5px;
  border-bottom: 2px solid grey;
  width: 340px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -200px;
`;

const Texts = styled.div`
  display: flex;
  justify-content: center;
  color: #2d333f;
  position: relative;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  height: 48px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  &:hover {
    color: #da3743;
  }
  border-top-left-radius:2px;
  border-top-right-radius:2px;

`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div>
        <div>
          <Border>
            <Texts>
              Hello
            </Texts>
            <Texts>
              Hello
            </Texts>
            <Texts>
              Hello
            </Texts>
            <Texts>
              Hello
            </Texts>
            <Texts>
              Hello
            </Texts>
          </Border>
        </div>
      </div>
    )
  }
}

export default App

/*===============*/

