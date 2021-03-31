import React, { Component } from 'react';
class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month')
  };
  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem('Arena');
    console.log(myLocalStorageData);
  }
  render() {
    return (
      <div className='App'>
        <button type='button' onClick={this.setLocalStorage}>Set local storage</button>
        <button type='button' onClick={this.getLocalStorage}>Get local storage</button>
      </div>
    );
  }
}
export default App;