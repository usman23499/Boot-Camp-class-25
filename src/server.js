// src/server.js
import { createServer } from "miragejs"

// call the data form json file

import Books from "./JSONdata/data.json";

export function makeServer() {
  let server = createServer({
    

    routes() {
      this.namespace = "api" // yhe nake hai for call api like /api/ yahan api lekhna lazmi nahi hai

      this.get("/books", () => { //now api become /api/books
        return Books // return our books data on api call
      })


      // CONTAIN  FOR THING Post , GET ,PUT , DELETE

      this.post("/add", (schema,req) => { //now api become /api/add for this
        console.log(req) // when we request for add ye chale ga
        const newBook=JSON.parse(req.requestBody);// Becuse hum ke console main dekha tha ke humen data requestBody main mil raha hai
        // and data json form main request kia hai is lea use parse

        
        Books.push(newBook);


        return Books // return our books data on api call
      })
    },
  })

  return server
}

// on server {servername}/api/books