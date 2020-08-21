'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');

  setTimeout(() => body.insertAdjacentHTML('afterbegin', `
  <div class="notification ${type}"
    style="position: absolute; top: ${top}; right: ${right}">
    <h2 class="title">
      ${title}
    </h2>
    <p class="description">
      ${description}
    </p>

  </div>
  `), 2000);
};

pushNotification('50px', '50px', 'Попробуйте снова!',
  'Ваши данные введены некорректно, попробуйте, пожалуйста, снова!', 'error');
