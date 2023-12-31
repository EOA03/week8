import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes"

dotenv.config()

const app:Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(routes)

app.get("/", (req: Request, res: Response) => {
    res.send("Belajar Express");
})

app.listen(port, ()=>{
    console.log(`Server listen ${port}`);
})