'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', `
  <div class="notification ${type}">
  <h2 class="title">${title}</h2>
  <p>${description}</p>
  </div>`);

  const container = document.querySelector(`.notification.${type}`);

  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  setTimeout(() => {
    container.style.display = 'none';
  }, 2000);
};

const titleOfSuccessMessage = 'Happy to inform you';
const successMessage = 'Your order is accepted';
const successMessagePosTop = 10;
const successMessageClass = 'success';

const titleOfErrorMessage = 'Error';
const errorMessage = 'That was last try. It can`t be helped ;)';
const errorMessagePosTop = 150;
const errorMessageClass = 'error';

const titleOfWarningMessage = 'Attention!';
const warningMessage = 'Something is going on. Be carefull';
const warningMessagePosTop = 290;
const warningMessageClass = 'warning';

const rightPositionOfMessage = 10;

pushNotification(
  successMessagePosTop,
  rightPositionOfMessage,
  titleOfSuccessMessage,
  successMessage,
  successMessageClass
);

pushNotification(
  errorMessagePosTop,
  rightPositionOfMessage,
  titleOfErrorMessage,
  errorMessage,
  errorMessageClass
);

pushNotification(
  warningMessagePosTop,
  rightPositionOfMessage,
  titleOfWarningMessage,
  warningMessage,
  warningMessageClass
);
