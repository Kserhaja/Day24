//getStorageItem/App.js
import React, { Component } from 'react';
class App extends Component {
  setMyStorage = () => {
    document.cookie = 'Year=2021';
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }
  getMyStorage = () => {
    // eslint-disable-next-line
  const myCookieData = document.cookie.getItem('Year');
  // eslint-disable-next-line
  const myLocalStorageData = localStorage.getItem('Paragon');
  // eslint-disable-next-line
  const mySessionStorageData = sessionStorage.getItem('frontend');
  }
  render() {
    return (
      <div className='App'>
        <button type='button' onClick={this.setMyStorage}>Set my storage</button>
        <button type='button' onClick={this.getMyStorage}>Get my storage</button>
      </div>
    );
  }
}
export default App;