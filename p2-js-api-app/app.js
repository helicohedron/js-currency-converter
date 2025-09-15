import { fetchCurrency } from './fetch-currency.js';
import { fetchIP } from './fetch-IP.js';
const MAX_CONVERTS = 5;
const MIN_CONVERTS = 2;

// Get IP location and set user-currency option.
async function getIP() {
  const locDetails = await fetchIP();

  let locCurrency = locDetails.currency.toLowerCase();

  if (!locCurrency) {
    locCurrency = 'eur';
  }
  
  const currDropDown = document.getElementById('user-currency');
  currDropDown.value = locCurrency;
}

async function handleSubmit(event) {
  event.preventDefault();
  
  const userCurrency = document.getElementById('user-currency').value;
  const userValue = Number(document.getElementById('txtMoney').value);

  const conversionsAPI = await fetchCurrency(userCurrency);
  
  // Get node list, turn into array, get values.
  const nodeArray = Array.from(document.querySelectorAll('.converted-currency'));
  const convertedCurrencies = nodeArray.map((currency) => currency.value);
  

  // Derive converted values and save to an array.
  const convertedValues = [];
  for (let curr of convertedCurrencies) {
    convertedValues.push(conversionsAPI[userCurrency][curr]);
  }

  document.getElementById('txtMoney').value = userValue.toFixed(2);

  // Iterate over the output boxes to display array values.
  const outputBox = document.querySelectorAll('.converted-money');
  outputBox.forEach((output, index) => {
    output.value = (convertedValues[index] * userValue).toFixed(2);
  });

  // Display exchange rate date.
  const showDate = document.querySelector('.date');
  const conversionDate = (conversionsAPI.date).replaceAll('-', '/');
  showDate.textContent = `Conversion as of ${conversionDate}`;

  focusToMoneyInput();
}

function focusToMoneyInput() {
  const inputBox = document.getElementById('txtMoney');
  inputBox.focus();
}

function handleSwitch() {
  const userCurr = document.getElementById('user-currency').value;
  const convertedCurr = document.querySelector('.converted-currency').value;
  
  document.getElementById('user-currency').value = convertedCurr;
  document.querySelector('.converted-currency').value = userCurr;

  focusToMoneyInput();
}

function handleAdd() {
  const convertedContainer = document.querySelector('.converted-container'); 

  const copy = document.querySelector('.converted-output').cloneNode(true);
  copy.querySelector('.converted-money').value = '';

  convertedContainer.appendChild(copy);
  
  const numberOfChild = document.querySelector('.converted-container').childElementCount; 


  if (numberOfChild >= MAX_CONVERTS) {
    btnAdd.disabled = true;
  }

  btnMinus.disabled = false;
  
  focusToMoneyInput();
}


function handleMinus() {
  const divContainer = document.querySelector('.converted-container');
  const lastChild = divContainer.lastElementChild;
  const numberOfChild = document.querySelector('.converted-container').childElementCount; 

  if (numberOfChild <= MIN_CONVERTS) {
    btnMinus.disabled = true;
  } 
    
  divContainer.removeChild(lastChild);
  btnAdd.disabled = false;
  
  focusToMoneyInput();
}

function handleClear() {
  document.getElementById('txtMoney').value = '';
  document.querySelectorAll('.converted-money').forEach((node) => node.value = '');
  
  focusToMoneyInput();
}

function handleEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('convert-btn').click();
  }

  focusToMoneyInput();
}

function toggleGuide() {
  const guideCard = document.querySelector('.guide-card-container');
  const quickGuide = document.querySelector('.quick-guide-para');
  
  if (guideCard.style.display === '') {
    guideCard.style.display = 'block';
    quickGuide.textContent = 'Hide quick guide';
  } else {
    guideCard.style.display = '';
    quickGuide.textContent = 'Show quick guide';
  }
}

function toggleAcknowledge() {
  const ackCard = document.querySelector('.acknowledgements-container');
  const ackPara = document.querySelector('.acknowledge-para');

  if (ackCard.style.display === '') {
    ackCard.style.display = 'block';
    ackPara.textContent = 'Hide acknowledgements';
  } else {
    ackCard.style.display = '';
    ackPara.textContent = 'View acknowledgements';
  }
}

window.addEventListener('load', getIP);

const form = document.getElementById('form-container');
form.addEventListener('submit', handleSubmit);

const btnSwitch = document.getElementById('switch-btn');
btnSwitch.addEventListener('click', handleSwitch);

const btnClear = document.getElementById('clear-btn');
btnClear.addEventListener('click', handleClear);

const btnAdd = document.getElementById('add-btn');
btnAdd.addEventListener('click', handleAdd);

const btnMinus = document.getElementById('minus-btn');
btnMinus.addEventListener('click', handleMinus);

const pressEnter = document.getElementById('txtMoney');
pressEnter.addEventListener('keypress', handleEnter);

const togglerQuickGuide = document.querySelector('.quick-guide-para');
togglerQuickGuide.addEventListener('click', toggleGuide);

const togglerAcknowledgements = document.querySelector('.acknowledge-para');
togglerAcknowledgements.addEventListener('click', toggleAcknowledge);