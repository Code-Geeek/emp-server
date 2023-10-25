// import json server
const jsonServer =  require('json-server')

// create json server using json server library
const empDetailsServer = jsonServer.create()

// setup the path/route for db.json file
const router = jsonServer.router("db.json")

// Returns middleware used by json server
const middleware = jsonServer.defaults()

// setup port for server app
const port = 4000 || process.env.PORT

// use middleware and router in server
empDetailsServer.use(middleware)
empDetailsServer.use(router)

// server should listen for request from frontend
empDetailsServer.listen(port,()=>{
    console.log(`empDetailsServer started at port ${port} , and waiting for response.`);
})