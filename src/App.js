import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class App extends Component {

  @observable value = 100;

  @action
  changeValue = () => {
    this.value = Math.random();
  }
  
  render() {
    return (
      <div className="App">
        값: {this.value}

        <button onClick = {this.changeValue} > 값 변경 </button> 
      </div>
    );
  }
}

export default App;
