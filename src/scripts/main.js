'use strict';

const pushNotification = (top, right, title, description, type) => {
  const createDiv = document.createElement('div');
  const titleH2 = document.createElement('h2');
  const createP = document.createElement('p');

  createDiv.classList.add('notification', `${type}`);

  createDiv.style.cssText = `top: ${top}px; right: ${right}px`;

  titleH2.classList.add('title');
  titleH2.textContent = `${title}`;

  createP.textContent = `${description}`;

  createDiv.append(titleH2, createP);

  document.querySelector('body').append(createDiv);

  setTimeout(() => createDiv.remove(), 2000);
};

pushNotification(50, 50,
  'TITLE', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'success');
