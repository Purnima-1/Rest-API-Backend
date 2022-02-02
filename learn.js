//const express = require('express')
//const app = express()
//const fs = require('fs')
// const read = fs.readFileSync('file.txt', 'utf8')
// fs.writeFile("writeMe.txt",read )

// fs.readFile('file.txt','utf8', function(err,data) {
//     fs.writeFile('writeMe.txt', data)
// })
//console.log('Heya');

const https = require('https')
 https.get("https://jsonplaceholder.typicode.com/users",res =>{
     let body = ''
     res.on('data', data => {
         body += data
         })
         res.on('end', () => console.log(body)
          )
    })
    
//     console.log(res.statusCode);
//     console.log(res.headers);
  //})

//   const server = https.createServer()
//   const port = 4000
//   server.listen(port)
//   console.log(`Server is listening at ${port}`);