'use strict';

const body = document.querySelector('body');
const div = document.createElement('div');
const header = document.createElement('h2');
const descript = document.createElement('p');

body.append(div);
div.append(header);
div.append(descript);

const pushNotification = (top, right, title, description, type) => {
  div.classList.add(`notification-${type}`);
  header.innerHTML = title;
  descript.innerHTML = description;
  div.style.cssText = 'position:absolute; padding: 20px; border-radius: 20px';
  div.style.top = top + 'px';
  div.style.right = right + 'px';

  if (type === 'success') {
    div.style.backgroundColor = 'lightgreen';
  }

  if (type === 'error') {
    div.style.backgroundColor = '#ff7f7f';
  }

  if (type === 'warning') {
    div.style.backgroundColor = '#dd7538';
  }
};

setTimeout(() => div.remove(), 200000);

pushNotification(10, 100, 'Success', 'Your result is Success', 'success');
