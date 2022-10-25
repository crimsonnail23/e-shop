const express = require('express');
const sequelize= require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

//tun sever on.
sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=> console.log('server connected.'))
})