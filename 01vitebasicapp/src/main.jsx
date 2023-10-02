import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';


// function MyApp() {
//   return(<>
//   <h2> Actual working  !</h2>
//   </>)
// }

// const ReactElement = {
//   type : 'a',
//   props : {
//       src : 'https://www.google.com',
//       target : '_blank'
//   },
//   children : 'click me visit google '
// }

const Anotherreact = (
  <a href='https://www.google.com/' target='_blank' rel="noopener noreferrer">Google</a>
);


const UserName = 'User Sagar'

const ReactElement = React.createElement(
    'a',
    { href :'https://www.google.com/' , target : '_blank'  , rel: "noopener noreferrer"},
    "Click Me ",
    UserName
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {Anotherreact} , 
    { ReactElement}
  </>
)
