import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate = new Date(2020,10,6,5);

currDate = currDate.getHours();
const cssStyle = {};

let greeting = '';
if(currDate>=1 && currDate<12){
  greeting = "Good Morning";
  cssStyle.color = 'green';
}else if(currDate>=12 && currDate<=18){
  greeting = "Good AfterNoon";
  cssStyle.color = 'orange';
}else{
  greeting = "Good Night";
  cssStyle.color = 'black';
}




ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style ={cssStyle}>{greeting} </span></h1>
    </div>

  </>,
  document.getElementById('root')
);
