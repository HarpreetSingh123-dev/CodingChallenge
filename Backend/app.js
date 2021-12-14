const express = require('express')
const database = require('./Config/database')
const errorHandlerMiddleware = require('./Middleware/Error')

database.authenticate()
                          .then(()=> console.log("Connected to remote database"))
                          .catch((err)=> console.log('Error' + err))

const app = express()

// to routes
app.use('/fetch' , require('./Routes/routes'))

app.use(errorHandlerMiddleware)


const PORT = process.env.PORT ||  5000

app.listen(PORT , console.log(`SERVER STARTED AT PORT ${PORT}`))


process.on("uncaughtException" , (err)=>{

    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to unhandled exception") 

  
    process.exit(1)

})

process.on("unhandledRejection" , (err)=>{

    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to unhandled promise rejection") 

   server.close(()=>{

       process.exit(1)
   }) 

})