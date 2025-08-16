const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyEl = document.querySelector('body');
  const divEl = document.createElement('div');

  divEl.classList.add('notification', type);
  divEl.style.top = `${posTop}px`;
  divEl.style.right = `${posRight}px`;

  const h2El = document.createElement('h2');

  h2El.className = 'title';
  h2El.textContent = title;
  divEl.append(h2El);

  const pEl = document.createElement('p');

  pEl.textContent = description;
  divEl.append(pEl);

  bodyEl.append(divEl);

  setTimeout(() => {
    divEl.remove();
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
