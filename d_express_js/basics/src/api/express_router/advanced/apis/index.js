

const routeManager=(app)=>{
    app.use('/user',require('./user'))
    app.use('/payments',require('./payments'))
}

module.exports =routeManager;

