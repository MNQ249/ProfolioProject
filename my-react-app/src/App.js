import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';

class App extends Component {
    
    render() { 
        return ( 
            <div>
            <Navigation logoTitle ="React Portfolio"/>
            <Header title="Deserts" button="Find Out More"/>
            </div>

         );
    }
}
 
export default App;