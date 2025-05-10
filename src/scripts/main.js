'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector("body")
  const message = document.createElement("div")
  message.classList.add('notification')
  message.classList.add(type);


  const titleElement = document.createElement('h2')
  titleElement.classList.add('title')
  titleElement.textContent = title;
  message.appendChild(titleElement)


  const descriptionElement = document.createElement('p')
  descriptionElement.textContent = description;
  message.appendChild(descriptionElement)

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  body.appendChild(message)

  setTimeout(() => {
    message.remove()

  }, 2000)




};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
