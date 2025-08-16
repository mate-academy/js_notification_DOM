'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const notification = document.createElement('div');
  const heading = document.createElement('h2');
  const text = document.createElement('p');

  // adding texts for title and description
  heading.innerText = title;
  text.innerText = description;

  // appending title and description to the notification
  notification.appendChild(heading);
  notification.appendChild(text);

  // appending classes for notification and title
  notification.classList.add('notification');
  heading.classList.add('title');

  // setting a position with the help of an interpolation
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  // using switch clause, appending classes based on function types
  switch (type) {
    case 'success':
      notification.classList.add('success');
      break;
    case 'error':
      notification.classList.add('error');
      break;
    case 'warning':
      notification.classList.add('warning');
      break;
    default:
      throw new Error('No styles for this type');
  }

  // firstly appending the notification to body
  document.body.appendChild(notification);

  // then with timeout removing it without changing DOM
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
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
