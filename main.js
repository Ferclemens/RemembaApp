import { app } from './app'
import './style.css'


document.querySelector('#app').innerHTML = `
<div class="container">
  <div class="color-picker-container">
    <input type="range" min="1" max="360" value="1" id="color-picker">
  </div>
  <h1 class="text-up">What do you <br> need?</h1>
  <img src="./astronauta.gif">
  <h1 class="text-down">for your next <br> adventure</h1>
  <input type="text" id="input-field" placeholder="Oxygen...?" autofocus>
  <button id="add-button">add to list</button>
  <ul id="products-list"></ul>
  <button id="clean-button">clean</button>
</div>
`
app()