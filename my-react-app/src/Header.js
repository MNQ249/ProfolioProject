import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    
    render() { 
        return ( 
            <header>
            <h1>{this.props.title}</h1>
            <p>Deserts take up about one third of the Earth's land surface</p>
            <h6>"wikipedia"</h6>
        <a href="#button">{this.props.button}</a>
            </header>
         );
    }
}
 
export default Header;