const recaptchaSitekey = '6LfdN7gaAAAAAA5cTx-AztvpLrCl18WOt5YJhZ9k';
const recaptchaURL = `https://www.google.com/recaptcha/enterprise.js?onload=recaptchaCallback&render=${recaptchaSitekey}`;

export const environment = {
  production: true,
  API_URL: 'https://jsonplaceholder.typicode.com',
  recaptchaSitekey,
  recaptchaURL,
};
