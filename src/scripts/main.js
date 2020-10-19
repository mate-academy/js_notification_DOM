'use strict';

const pushNotification = (top, right, title, description, type = 'warning') => {
  const body = document.body;
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');
  const showWhile = 2000;
  const showAfter = 1000;

  message.classList.add('notification', type);
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  messageTitle.classList.add('title');
  messageTitle.textContent = title;

  messageDescription.textContent = description;

  const displayContent = () => {
    body.append(message);
    message.append(messageTitle);
    message.append(messageDescription);
  };

  setTimeout(() => displayContent(), showAfter);

  setTimeout(() => {
    message.remove();
  }, showAfter + showWhile);
};

pushNotification(10,
  10,
  'Title',
  `This is example of result.
  Notofication should contain title and description.`,
  'success');
