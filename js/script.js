let counter = 0;

function updateCounter() {
  document.getElementById('counter-value').innerText = counter;
}

function increment() {
  counter++;
  updateCounter();
}

function decrement() {
  counter--;
  updateCounter();
}

function reset() {
  counter = 0;
  updateCounter();
}


// let counter = 0;
// let minLimit = null;
// let maxLimit = null;

// function updateCounter() {
//   const counterValue = document.getElementById('counter-value');
//   counterValue.innerText = counter;

//   // Color change based on the counter value
//   if (counter > 0) {
//     counterValue.style.color = 'green';
//     counterValue.style.transform = 'scale(1.1)';
//   } else if (counter < 0) {
//     counterValue.style.color = 'red';
//     counterValue.style.transform = 'scale(1.1)';
//   } else {
//     counterValue.style.color = 'black';
//     counterValue.style.transform = 'scale(1.0)';
//   }
// }

// function getStepValue() {
//   const stepInput = document.getElementById('step').value;
//   return stepInput ? parseInt(stepInput) : 1;
// }

// function increment() {
//   const step = getStepValue();
  
//   if (maxLimit !== null && counter + step > maxLimit) {
//     alert('Counter exceeds max limit!');
//     return;
//   }
  
//   counter += step;
//   updateCounter();
// }

// function decrement() {
//   const step = getStepValue();
  
//   if (minLimit !== null && counter - step < minLimit) {
//     alert('Counter is below min limit!');
//     return;
//   }

//   counter -= step;
//   updateCounter();
// }

// function reset() {
//   counter = 0;
//   updateCounter();
// }

// // Event listeners to set limits
// document.getElementById('min-limit').addEventListener('change', function() {
//   minLimit = parseInt(this.value);
// });

// document.getElementById('max-limit').addEventListener('change', function() {
//   maxLimit = parseInt(this.value);
// });


// let counter = parseInt(localStorage.getItem('counter')) || 0;
// let minLimit = null;
// let maxLimit = null;
// let isCountdown = false;  // Track countdown mode

// Initialize
// updateCounter();

// function updateCounter() {
//   const counterValue = document.getElementById('counter-value');
//   counterValue.innerText = counter;
//   localStorage.setItem('counter', counter);

//   // Color change based on the counter value
//   if (counter > 0) {
//     counterValue.style.color = 'green';
//     counterValue.style.transform = 'scale(1.1)';
//   } else if (counter < 0) {
//     counterValue.style.color = 'red';
//     counterValue.style.transform = 'scale(1.1)';
//   } else {
//     counterValue.style.color = 'black';
//     counterValue.style.transform = 'scale(1.0)';
//   }
// }

// function getStepValue() {
//   const stepInput = document.getElementById('step').value;
//   return stepInput ? parseInt(stepInput) : 1;
// }

// function increment() {
//   const step = getStepValue();
  
//   if (maxLimit !== null && counter + step > maxLimit) {
//     showError('Counter exceeds max limit!');
//     return;
//   }

//   counter += step;
//   addLog(`Incremented by ${step}`);
//   updateCounter();
// }

// function decrement() {
//   const step = getStepValue();

//   if (minLimit !== null && counter - step < minLimit) {
//     showError('Counter is below min limit!');
//     return;
//   }

//   counter -= step;
//   addLog(`Decremented by ${step}`);
//   updateCounter();
// }

// function reset() {
//   counter = 0;
//   addLog('Counter reset');
//   updateCounter();
// }

// function setStartValue() {
//   const startValue = document.getElementById('start-value').value;
  
//   if (startValue === "") {
//     showError('Please enter a start value');
//     return;
//   }

//   counter = parseInt(startValue);
//   addLog(`Set start value to ${counter}`);
//   updateCounter();
// }

// function toggleCountdown() {
//   isCountdown = !isCountdown;
//   const modeText = document.getElementById('mode');
//   modeText.innerText = isCountdown ? "Mode: Countdown" : "Mode: Count Up";

//   if (isCountdown) {
//     document.getElementById('increment').disabled = true;
//   } else {
//     document.getElementById('increment').disabled = false;
//   }
// }

// function addLog(action) {
//   const logContainer = document.getElementById('action-log');
//   const listItem = document.createElement('li');
//   listItem.innerText = `${new Date().toLocaleTimeString()} - ${action}`;
//   logContainer.appendChild(listItem);
// }

// function showError(message) {
//   const errorMessage = document.getElementById('error-message');
//   errorMessage.innerText = message;
  
//   setTimeout(() => {
//     errorMessage.innerText = '';
//   }, 3000);
// }

// Event listeners for limit inputs
// document.getElementById('min-limit').addEventListener('change', function() {
//   minLimit = parseInt(this.value);
// });

// document.getElementById('max-limit').addEventListener('change', function() {
//   maxLimit = parseInt(this.value);
// });

