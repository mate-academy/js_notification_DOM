'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const divMassege = document.createElement('div');
  const titleMassege = document.createElement('h2');

  divMassege.className = 'notification';
  divMassege.classList.add(type);

  body.append(divMassege);
  body.style.position = 'relative';
  divMassege.style.position = 'absolute';
  divMassege.style.top = `${posTop}px`;
  divMassege.style.right = `${posRight}px`;

  titleMassege.className = 'title';
  titleMassege.textContent = title;

  divMassege.append(titleMassege);

  const descriptMassege = document.createElement('p');

  descriptMassege.textContent = description;

  divMassege.append(descriptMassege);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
