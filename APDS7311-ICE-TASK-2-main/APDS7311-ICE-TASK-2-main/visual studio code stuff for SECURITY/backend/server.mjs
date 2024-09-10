import express from "express"
import http from "http"
import https from "https"
import fs from "fs"
const app = express()

app.use(express.json())

const urlprefex = "/api"

const PORT = 3000

// app.get("/" ,(req,res)=>{
//     res.send("using express to run the server")
// })
// app.get("/test" ,(req,res)=>{
//     res.send("using the /test endpoint")
// })

// app.get(urlprefex+"/favorites" ,(req,res)=>{
//     const favs = [
//         {
//             Id: "1",
//             name: "Russian Bear"
//         },
//         {
//             Id: "2",
//             name: "coke"
//         },
//         {
//             Id: "3",
//             name: "Weed"
//         }
//     ]
//     res.json({
//         message: "favs",
//         favs: favs
//     })
// })

const server = https.createServer({
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
},app)
app.get("/" ,(req,res)=>{
        res.send("using express to run the server")
    })

app.listen(PORT)
