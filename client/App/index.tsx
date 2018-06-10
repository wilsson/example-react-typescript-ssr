import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
`;
export class App extends React.Component {
    state = {
        counter: 0
    };
    handleClick = () => {
        console.log('click me');
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return(
            <Wrapper>
                <p>{this.state.counter}</p>
                <button onClick={this.handleClick}>click me</button>
            </Wrapper>
        )
    }
}