// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({ message: 'All fields required.' });
  }

  console.log(`Received: ${name}, ${email}, ${course}`);
  res.json({ message: 'Application submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
