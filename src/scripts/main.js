'use strict';

const pushNotification = (top, right, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification', type);

  const titleMessege = document.createElement('h2');

  titleMessege.textContent = title;

  element.append(titleMessege);

  const descriptionMessege = document.createElement('p');

  descriptionMessege.textContent = description;

  element.append(descriptionMessege);

  element.style.top = top + 'px';
  element.style.right = right + 'px';

  document.body.append(element);

  setTimeout(() => element.remove(), 2000);
};

pushNotification(50, 50, 'Success', 'Congratulation :)', 'success');

pushNotification(250, 50, 'Error', 'Please, check your code!', 'error');

pushNotification(450, 50, 'Warning', 'Something went wrong :(', 'warning');
