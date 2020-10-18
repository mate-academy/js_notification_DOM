'use strict';

const pushNotification = (top, right, title, description, type) => {
  const banner = document.createElement('div');

  banner.className = `notification ${type}`;

  banner.style.cssText = `position: absolute;`
  + `top: ${top}px; right: ${right}px;`;

  banner.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  document.body.append(banner);

  setTimeout(() => banner.remove(), 2000);
};

pushNotification(
  '25',
  '5',
  'Congratulations',
  'now we know your IP',
  'success',
);
