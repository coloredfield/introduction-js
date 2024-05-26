const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;