require('dotenv').config()
const express = require('express');
const cors = require('cors');
const route = require('./routes/route');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/', route);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
