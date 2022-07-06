import React from 'react';
import ReactDOM from 'react-dom/client';


import './_assets/scss/index.scss';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Success from './components/Success';
import { Project1, Project2, Projects } from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes className="main">
            <Route exact path='' element={<Navigate to='portifolio'/>}/>
            <Route exact path='/portifolio' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}>
                <Route path='' element={<Navigate to='project1'/>}/>
                <Route path='project1' element={<Project1/>}/>
                <Route path='project2' element={<Project2/>}/>

            </Route>
            <Route  path='/about' element={<About/>}/>
            <Route  path='/contact' element={<Contact/>}/>
            <Route  path='/success' element={<Success/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
