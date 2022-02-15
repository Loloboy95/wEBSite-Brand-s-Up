import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function App(props){
//     const a='Guinée'
//    return <>
//         <Sos app={props.app} title='Bienvenu kankan' description={a}/>
//         <Sos ap="sdds" title='Bienvenu Bamako' description='Mali'/>
//    </>
// }

// function Sos(props){
//     return <div>
//               <h2>{props.title}</h2>
//               <p>{props.description}</p>
//               <p>{props.ap}</p>
//           </div> 
// }

ReactDOM.render(<App/>,document.getElementById('root'))

