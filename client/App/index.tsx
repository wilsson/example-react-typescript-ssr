import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
`;

interface Props {
    data?: any[];
}
interface State {
    users: any[];
}

export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        let initialData = [];
        if(this.props.data){
            initialData = this.props.data;
        } else {
            initialData = (window as any).__initialData__;
            delete (window as any).__initialData__;
        }
        this.state = { users: initialData };
    }
    static fetchUsers() {
        return axios.get('http://localhost:3000/users')
            .then((response) => response.data)
    }
    render() {
        return(
            <div>
                <ul>
                    {this.state.users.map((user, i) => (
                        <li key={i}>{user.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}