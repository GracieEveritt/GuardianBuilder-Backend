const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path')
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({extended:false}));
app.use(parser.json());
app.use(cors());
app.use(morgan('dev'))

//remove this when deploy
// app.get('/', (req, res) => res.json({msg:'Welcome to the GuardianBuilder API'}));

app.use('/api/accounts', require('./routes/accounts'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/forms', require('./routes/forms'));
app.use('/api/child', require('./routes/child'));
app.use('/api/parent', require('./routes/parent'));
app.use('/api/guardian', require('./routes/guardian'));

if(process.env.NODE_env === 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html')))
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

