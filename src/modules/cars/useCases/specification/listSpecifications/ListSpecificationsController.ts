import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

import { Request, Response } from "express";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const specifications = this.listSpecificationsUseCase.execute();

    return res.status(200).send({ specifications });
  }
}
