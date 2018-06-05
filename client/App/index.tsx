import * as React from 'react';

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
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}