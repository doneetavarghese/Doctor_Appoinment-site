// import json-server 
const jsonServer = require('json-server')

// 2 create a server application using jsonserver
const doctor = jsonServer.create()

// 3 setup path for db.json
const router=jsonServer.router('db.json')

// 4  return middleware
   const middleware= jsonServer.defaults()

// 5 set up a port number 
  const port = 3001 

// use in doctor
  doctor.use(middleware)
  doctor.use(router)

  // to run the server
    doctor.listen(port,()=>{
        console.log("Doctor listining on port" + port)
    })