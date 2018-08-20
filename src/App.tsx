// modules import
import * as React from 'react';
import { connect } from 'react-redux';

// custom imports
import styled, { keyframes } from './styled-components';

import { StoreState} from './_types/StoreStates'
// file imports
import logo from './logo.svg';


// Props interface
interface Props {
  test: string
}

// State interface


// default component
class App extends React.Component<Props, Object>{
  public render() {
    console.log(this.props.test);
    return (
      <StyledApp>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          TestReducer  {this.props.test}
        </Intro>
      </StyledApp>
    );
  }
}


export function mapStateToProps(state: StoreState): Props {

  return {
    test: state.testState.test
  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

  
// styled for styled components
const StyledApp = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${Rotate360} infinite 20s linear;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;