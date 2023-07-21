import { app } from './app'
import './style.css'


document.querySelector('#app').innerHTML = `
<div class="container">
  <div class="color-picker-container">
    <input type="range" min="1" max="360" value="180" id="color-picker">
  </div>
  <h2 class="text-up">What do you need?</h2>
  <img src="./astronauta.gif">
  <h2 class="text-down">for your next adventure</h2>
  <input type="text" id="input-field" placeholder="Milanesas">
  <button id="add-button">ADD TO CART</button>
  <ul id="products-list"></ul>
</div>
`
app()