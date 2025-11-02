import express from "express";
import cors from "cors";

const app = express();

// date - 6 june 2024
// basic configurations
// middlewares (app.use)
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true , limit: "16kb"}))
app.use(express.static("public"));  

// CORS configuration
// Cors is a middleware that allows us to relax the security applied to an API
// it is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

app.use(cors({
    origin : process.env.CORS_ORIGIN?.split(",") || "http://localhost:3456",
    credentials : true, // to access cookies from frontend
    methods : ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"], // you can add headers here
}),
); // go on .env and set the CORS_ORIGIN variable to your frontend url


app.get("/", (req,res)=>{
    res.send("Welcome to basecampy");
});

export default app;