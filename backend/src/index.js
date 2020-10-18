const express = require('express');
const cors = require('cors');
const app = express();

const connectDB= require('./config/database');

// settings
app.set('port', process.env.PORT || 4000)
connectDB();
// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
