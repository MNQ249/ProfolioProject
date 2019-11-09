import React,{Component} from 'react';

import './Navigation.css';

class  Navigation extends Component {
  render(){
  return (
    <nav>
      <h2 className="logo">React Project</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
}
export default Navigation;