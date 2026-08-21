const btn = document.getElementById('fetchBtn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  btn.disabled = true;
  btn.textContent = '⏳ Talking to backend...';
  output.classList.remove('error');
  output.textContent = '';

  fetch('/api/message')
    .then(res => res.json())
    .then(data => {
      output.textContent = '✅ ' + data.message;
    })
    .catch(err => {
      output.classList.add('error');
      output.textContent = '❌ Error: ' + err;
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = '🔔 Ping the Backend';
    });
});