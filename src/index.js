import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', 'and in the world'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // <i class="fa fa-address-book" aria-hidden="true"></i>
  var fa = document.createElement('i');
  fa.classList.add('fa');
  fa.classList.add('fa-address-book');

  element.appendChild(fa);

  return element;
}

document.body.appendChild(component());