import React, {Component} from 'react';
import Header from './components/header';
import Form from './components/form';
import Footer from './components/footer';

class App extends Component {
    render(){
     return (
    <div className="full">     
    <Header/>
   <Form/>
   <Footer/>
      </div>
  );   
    }
}

export default App;
