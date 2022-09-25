import express from "express";
import { router } from "./routes/premLeague";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/prem_league", router);

app.listen(3000, () => console.log("it works"));
