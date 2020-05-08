const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({extended:false}));
app.use(parser.json());
app.use(cors());

app.get('/', (req, res) => res.json({msg:'Welcome to the GuardianBuilder API'}));

app.use('/api/accounts', require('./routes/accounts'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/forms', require('./routes/forms'));
app.use('/api/child', require('./routes/child'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

