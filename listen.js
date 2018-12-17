// finished server side need to do client side from tutorial now. Changed api request to database request

const express = require("express");
const http = require("http");
const WebSocket = require("ws");
// const socketIo = require("socket.io");
// const axios = require("axios");
const port = process.env.PORT || 4001;
// const index = require("./routes/index");
const app = express();
// const db = require("./firestore");
// app.use(index);
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", ws => {
  console.log("client connected");
  ws.on("message", message => {
    console.log(`recieved: ${message}`);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
// const io = socketIo(server);
// io.on("connection", socket => {
//   console.log("New client connected"),
//     setInterval(() => getDataAndEmit(socket), 10000);
//   socket.on("disconnect", () => console.log("Client disconnected"));
// });
// const getDataAndEmit = async socket => {
//   db.collection("games")
//     .doc(`0570`)
//     .get()
//     .then(gameDoc => {
//       if (!gameDoc.exists) {
//         res.status(404).send("No such trail");
//       } else {
//         const { game } = gameDoc.data();
//         console.log(game);
//         socket.emit("FromAPI", game);
//         // res.status(200).send({ game });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// getGameByPin = (req, res, next) => {
//   const { gamePin } = req.params;
//   db.collection("games")
//     .doc(`${gamePin}`)
//     .get()
//     .then(gameDoc => {
//       if (!gameDoc.exists) {
//         res.status(404).send("No such trail");
//       } else {
//         const game = gameDoc.data();
//         res.status(200).send({ game });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
// .onSnapshot( gameSnapshot => {

//   if (!gameSnapshot.exists) {
//     res.status(400).send('No game found for that pin')
//   } else{
//     const game = gameSnapshot.data();
//     res.status(201).send(game);

//   }

// })

// const getApiAndEmit = async socket => {
//     try {
//       const res = await axios.get(
//         "https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558"
//       );
//       socket.emit("FromAPI", res.data.currently.temperature);
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   };
