import React, { Component } from 'react';
import '../App.css';
import firebase, { auth, provider } from '../firebase.js';

const About = () =>{
return(
    <div className='display-item'>
        <h3> You must be logged in to see the potluck list and submit to it.</h3>
        <div className='info-block'>
        <p>
            <h4> In this version, we have split the big App.js file into different components.
            </h4>
        </p>
        <p>
            <h4> Main Issues encountered were as follows:
                 </h4>
        </p>
        <p>
            <h4> 
                Issue :	How to pass state of one componenet to another? 
            </h4>
        </p>
        <p>
        <h4> 
        Resolution :	You can't pass state of one component to another. You can only pass props from parent to child component. Either restructure your components hierarchy to have this dependence, or use a state/event management system like Redux (react-redux) 
        </h4>
        </p>
        <p>
            <h4> 
                In this version, we have passed properties from one component to another.
            </h4>
        </p>
        <p>
            <h4> 
            Reference	https://stackoverflow.com/questions/46426078/reactjs-passing-state-value-from-one-component-to-another
            </h4>
        </p>
        <p>
            <h4> 
            Reference	https://reactjs.org/docs/lifting-state-up.html
            </h4>
        </p>
        <p>
            <h4> 
            The Navigation links don't work. Routes are not yet activated.
            </h4>
        </p>
        </div>
    </div>
);
}
export default About;