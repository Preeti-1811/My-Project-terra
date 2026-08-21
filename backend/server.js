const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from My-Project-terra backend!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
//it exists so the ALB can periodically hit it to check if the container is alive

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend listening on port ${PORT}`);
});