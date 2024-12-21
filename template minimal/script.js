// script.js

// Get elements
const menuButton = document.getElementById('menu-button');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');
const qrCodeElement = document.getElementById('qr-code');

// QR Code API URL
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`;

// Set QR Code Image Source
qrCodeElement.src = qrUrl;

// Open Popup
menuButton.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close Popup
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close Popup when clicking outside the content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
