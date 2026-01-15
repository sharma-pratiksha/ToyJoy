// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./db/connect.js";

// dotenv.config({
//     path: './.env'
// })

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// connectDB()

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server at http://localhost:${port}`);
// });







import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

// const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!", err);
  });














// import express from "express";
// const app = express();

// ( async() => {
//     try {
//         await mongoose.connect(`${process.env.mongoose.MONGODB_URI}/ ${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERROR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//         console.log(`app is listening on port ${process.env.PORT}`);    
//         })

//     } catch(error){
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()

