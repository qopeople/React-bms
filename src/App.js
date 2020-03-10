import React from 'react';
// import logo from './logo.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mes: "父组件向子组件传值" }
    }
    render() {
        return ( 
          <div>dd</div>
        )
    }
}

export default App;