import React, {Component} from 'react';
import SlideShow from './components/SlideShow';
import Product from './components/Product';

class App extends Component {
  render(){
    return(
      <div>
        <SlideShow/>
        <br />
        <Product/>
      </div>
    );
  }
}

export default App;
