import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { fruits as importedFruits } from './fruits';
import { choice, remove } from './helpers';

function getRandomFruit() {
    // since imports are read-only, change the original array in place
    // and use a local variable with a working copy
    let fruits = [...importedFruits];
    let fruit = choice(fruits);

    if (fruit) {
        console.log(`I'd like one ${fruit}, please.`);
        console.log(`Here you go: ${fruit}`);
        console.log(`Delicious! May I have another?`);

        fruits = remove(fruit, fruits);
        if (fruits.length > 0) {
            console.log(`We have ${fruits.length} remaining.`);
        } else {
            console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
        }
    } else {
        console.log("Sorry, we're completely all out of fruit at the moment.");
    }
}

// Call function to start the process
getRandomFruit();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
