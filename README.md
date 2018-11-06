# react-socket.io

A wrapper component connect Socket.io to React.

## Installation

#### npm
`npm i react-socket.io --save`


## Usage

# Set Socket Host

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { socketStore, socketContext } from 'react-socket.io';
const { Provider } = socketContext;
const host = socketStore("ws://localhost:9000")

ReactDOM.render(
    <Provider value={host}>
        <App />
    </Provider>, document.getElementById('root')
);
```

# Get the socket props on component

```javascript
import React, { Component } from 'react';
import { socketConnect } from 'react-socket.io';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }

    // Get the response from socket server
    this.props.io.on('get_color', (socket) => {
      this.setState({ color: socket })
    })

    // send the data to server
    this.props.io.emit('set_color', this.state.color);
  }



  render() {
    return (
      <div className="App" style={{ background: this.state.color }}>

      </div>
    );
  }
}

export default socketConnect(App);
```



### Bugs & Contribution 

Application should have some bug. Don't worry please commit issue on this project.

Feel free to contribute this open source project. At first fork this project and please let me know what feature you want to develop. 