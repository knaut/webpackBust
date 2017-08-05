import _ from 'lodash';
import './assets/style.css';
import Icon from './assets/icon.png';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'myself', 'and in the world'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // <i class="fa fa-address-book" aria-hidden="true"></i>
  var fa = document.createElement('i');
  fa.classList.add('fa');
  fa.classList.add('fa-address-book');

  element.appendChild(fa);

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());