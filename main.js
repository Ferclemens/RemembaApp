import { app } from './app'
import './style.css'


document.querySelector('#app').innerHTML = `
<div class="container">
  <div class="instructions" id="instructions">
    <h3 class="instructions-title">Instructions<h3>
    <p>- Write anything</p>
    <p>- Add to list with the button</p>
    <p>- Remember what you need </p>
    <p>- You can delete items one by one clicking it, or clear the list with "clean" button</p>
  </div>
  <div class="clear-confirm" id="clear-warning">
    <p>Are you sure?<br>This action cannot be going back.</p>
    <div class="button-group">
      <button id="accept-clear">Accept</button>
      <button id="cancel-clear">Cancel</button>
    </div>
  </div>
  <div class="color-picker-container">
    <input type="range" min="1" max="360" value="1" id="color-picker">
  </div>
  <h1 class="text-up">What do you <br> need?</h1>
  <img src="./astronauta.gif" alt="astronaut spinning in space">
  <h1 class="text-down">for your next <br> adventure</h1>
  <div class="buttons-group">
    <a href="https://github.com/Ferclemens" target="_blank"><img src="./githubPixelLogo.png" alt="Github pixel art logo"></a>
    <a href="https://www.linkedin.com/in/foclemens/" target="_blank"><img src="./linkedinPixelLogo.svg" alt="LinkedIn pixel art logo"></a>
  </div>
  <input type="text" id="input-field" placeholder="Oxygen...?" autofocus>
  <button id="add-button">add to list</button>
  <ul id="products-list"></ul>
    <button id="clean-button">clean</button>
    <button id="instructions-button">instructions</button>
</div>
`
console.log(typeof(null))
app()