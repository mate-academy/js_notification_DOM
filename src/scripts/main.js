'use strict';

const pushNotification = (top, right, title, description, type) => {
  const alertBlock = document.createElement('div');
  const alertTitle = document.createElement('h2');
  const alertDescription = document.createElement('p');

  document.body.appendChild(alertBlock);
  alertBlock.classList.add(`notification`);
  alertBlock.classList.add(type);

  alertBlock.append(alertTitle);
  alertBlock.append(alertDescription);

  alertTitle.classList.add('title');
  alertTitle.innerText = title;

  alertDescription.innerText = description;

  alertBlock.style.top = `${top}px`;
  alertBlock.style.right = `${right}px`;

  setTimeout(() => alertBlock.remove(), 2000);
};

pushNotification(
  50,
  50,
  'Success!',
  'Success message',
  'success'
);
