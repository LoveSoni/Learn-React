import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GetMyCustomHeading from './CustomHeading.jsx'
import CallMyCustomHeadingMethod from './CallCustomHeading.jsx'

// function PrintHeading() {
//   return (<h2>Heading</h2>)
// }

// this function is not allowed 

// inbuild method(createElement) to create a component
const ReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'click me'
)

const AnotherElement = (<a href='google.com'>google</a>)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // <GetMyCustomHeading />
  // <CallMyCustomHeadingMethod />
  // <PrintHeading />
  ReactElement  // this is how babel compile our html to reacelement object
  // PrintHeading
  /* <AnotherElement /> */

)
