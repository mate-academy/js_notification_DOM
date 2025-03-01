function pushNotification(x, y, title, description, type) {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.style.position = 'absolute';
  notification.style.left = `${x}px`;
  notification.style.top = `${y}px`;

  const notificationTitle = document.createElement('h2');

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;

  const notificationDescription = document.createElement('p');

  notificationDescription.textContent = description;

  notification.appendChild(notificationTitle);
  notification.appendChild(notificationDescription);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

pushNotification(
  100,
  100,
  'Sukces!',
  'Operacja zakończona sukcesem.',
  'success',
);

pushNotification(200, 200, 'Błąd!', 'Coś poszło nie tak.', 'error');

pushNotification(
  300,
  300,
  'Uwaga!',
  'To jest komunikat ostrzegawczy.',
  'warning',
);
