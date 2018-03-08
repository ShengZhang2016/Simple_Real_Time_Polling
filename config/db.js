/*
* @Author: zhangsheng
* @Date:   2018-03-07 11:52:28
* @Last Modified by:   zhangsheng
* @Last Modified time: 2018-03-08 01:11:20
*/

const mongoose = require('mongoose');
const keys = require('./keys');


//map global promises
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
