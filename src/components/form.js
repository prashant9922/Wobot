import React from 'react';

const Form = (props) => {
    return(
    <div className="form">
    <div className="container">
      <div className="form-container">
          
        <div className="form-logo">
            <img src="Rect.png" className="one" alt=""/>
            <img src="RectB.png" className="two" alt=""/>
        <img src="Rect2.png" className="three" alt=""/>
        </div>
          <div className="top">
        <div className="heading">
          <h1>It’s a delight to have you onboard</h1>
        </div>
            <div className="heading-para">
                <p>Help us know you better.<br/>
(This is how we optimize Wobot as per your business needs)</p>
              </div>
          </div>
        <div className="form-input">
          <div className="input-1">
        <p>Company name</p> 
        <input type="text" placeholder="e.g. Example Inc"/>
        </div>
            <div className="input-2">
        <p>Select</p>
        <select name="Select" id="select">
                <option value="select">Select</option>
        </select>
        </div>
          </div>
          <div className="size">
          <p>Company Size</p>
        <nav>
        <ul>
        <li><a href="">1-20</a></li>  
        <li><a href="">21-50</a></li>
        <li><a href="" className="blue">51-200</a></li>
        <li><a href="">201-500</a></li>
        <li><a href="">500+</a></li>
        </ul>      
        </nav>
          </div>
          <div className="call-to-action">
          <a href="" className="btn">Get Started</a>
          </div>
          
        </div>
    </div>
      </div>
    );
}
export default Form;