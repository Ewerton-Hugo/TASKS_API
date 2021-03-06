import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import routes from "./routes";
//import {User} from "./entity/tasks";

const app = express() 
createConnection()

app.use(bodyParser.json())
app.use(routes)

app.listen(3333)