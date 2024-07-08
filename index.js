const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const port = 8080
// http://localhost:8080

// middlewares // run before req
app.use(cookieParser())

// GET request to accept
// req (obj) => user want sth
// res (obj) => pass sth to user
app.get('/', (req, res) => {
  res.send('Mock Interview Today! I am depressed!!!')  
}) 

// npm install cookie-parser
app.get('/cookies', (req, res) => {
    // refresh webpage to show below in terminal, not browser console
    // add cookies in browser: F12 => Application => Cookies => url => add name & value
    console.log(req.cookies)
    res.send('success')
})

// user postman to check post url
app.post("/api", (req, res) => {
  res.send("This page is API!");
}); 

app.get("/api/route/:routeId", (req, res) => {
  // params => object => all params as key
  // request from frontend (visible in browser)
  // pass to backend / database logic (hidden in browser)
  // => if find the route => return the result
  // => else return no such route

  // => routeId exist? => got some data from database
  // => construct the data to become json
  // => json shoot back to user

  // develop API
  const list = [
    {
      stopId: "AGH43243HDF3",
      route: req.params.routeId,
      bound: "O",
      service_type: 2,
    },
    {
      stopId: "AG141343HDF3",
      route: req.params.routeId,
      bound: "I",
      service_type: 2,
    },
  ];

  // res.send(`You post a request for route ${req.params.routeId}`);
  res.json(list);
}); 


// last
app.listen(port, () => {
    console.log(`Server is listening on: ${port}`);
})

