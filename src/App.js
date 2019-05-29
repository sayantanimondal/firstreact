import React, {Component} from 'react';
import './App.css';


export interface AppProps {
    name: string;
    teacher: string;
    student: string;
}

export interface AppState {
    name: string;
    age: number;
    address: string;
}

class App extends Component<AppProps, AppState> {


    constructor(props){
        super(props);

        console.log(props.name);
        
        this.state = {
            name: 'Bday',
            age: 'sdadda',
            address: 'whitefield'      
        };


    }



    render() {
        const { name } = this.props; 
        const { age } = this.state;
        return (
            <React.Fragment>
              <p>Hello Gonu and Kathu</p>
              <p>hi</p>
              <span>{name}</span>
              <span>{age}</span>
            </React.Fragment>

        );

    }

}

 export default App;