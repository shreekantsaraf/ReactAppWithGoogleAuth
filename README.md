# ReactAppWithGoogleAuth
V2 notes-
In this version, we have split the big App.js file into different components.
Main Issues encountered were as follows:
Issue : How to pass state of one componenet to another?
Resolution : You can't pass state of one component to another. You can only pass props from parent to child component. Either restructure your components hierarchy to have this dependence, or use a state/event management system like Redux (react-redux)
In this version, we have passed properties from one component to another.
Reference https://stackoverflow.com/questions/46426078/reactjs-passing-state-value-from-one-component-to-another
Reference https://reactjs.org/docs/lifting-state-up.html
The Navigation links don't work. Routes are not yet activated.

V1 notes
This site was built using the following two articles 
1. https://css-tricks.com/firebase-react-part-2-user-authentication/ 
   code is at https://github.com/swbloom/fun-food-friends-auth
2.	Before the previous article, the part1 on that was here https://css-tricks.com/intro-firebase-react/ 
    Part1 code is at https://github.com/swbloom/fun-food-friends/blob/master/src/App.js
3.	Google Firebase Authentication mechanism was used.  https://console.firebase.google.com/u/0/
The built site was put on Azure AppService WebApp

