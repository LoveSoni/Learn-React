import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GetMyCustomHeading from './CustomHeading.jsx'
import CallMyCustomHeadingMethod from './CallCustomHeading.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />,
  // <GetMyCustomHeading />
  <CallMyCustomHeadingMethod />
)
