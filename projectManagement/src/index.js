import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./.env",
});

// const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app is listening on port http://localhost:${PORT}`);
});