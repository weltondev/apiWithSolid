import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";

export const routes = Router();

routes.use("/categories", categoriesRoutes);
