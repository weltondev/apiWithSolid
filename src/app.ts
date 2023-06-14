import swaggerUi from 'swagger-ui-express';
import express from "express";
import cors from 'cors'

import swaggerFile from './swagger.json';
import { routes } from "./routes";

export const app = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);