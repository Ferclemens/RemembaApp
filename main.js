import { app } from './app'
import './style.css'


document.querySelector('#app').innerHTML = `
<div class="container">
  <div class="color-picker-container">
    <input type="range" min="0" max="359" value="180" id="color-picker">
  </div>
  <img src="./astronauta.gif">
  <input type="text" id="input-field" placeholder="Bread">
  <button id="add-button">ADD TO CART</button>
  <ul id="products-list"></ul>
</div>
`
app()