/*
* @Author: zhangsheng
* @Date:   2018-03-07 01:58:17
* @Last Modified by:   zhangsheng
* @Last Modified time: 2018-03-08 00:57:04
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// DB config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

//set public folder here
app.use(express.static(path.join(__dirname, 'public')));

//use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//use cors
app.use(cors());

//define routing
app.use('/poll', poll);

const port = 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));