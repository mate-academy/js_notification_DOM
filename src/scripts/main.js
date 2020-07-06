'use strict';

const pushNotification = (top, right, title, description, type) => {
  const main = document.querySelector('body');
  const message = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionMessage = document.createElement('p');

  message.classList.add('notification', type);
  message.style.cssText = `top: ${top}px; right: ${right}px`;
  titleMessage.classList.add('title');
  titleMessage.innerText = title;
  descriptionMessage.innerText = description;
  message.append(titleMessage, descriptionMessage);
  main.append(message);

  window.setTimeout(function() {
    message.remove(titleMessage, descriptionMessage);
  }, 2000);
};

pushNotification(50, 50, 'Success', 'Lorem ipsum dolor sit amet, '
+ 'consectetur adipisicing elit, sed do eiusmod', 'success');
