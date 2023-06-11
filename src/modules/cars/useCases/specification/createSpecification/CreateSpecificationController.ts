import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createSpecificationUseCase.execute({
      name,
      description,
    });

		return res.status(201).send();
  }
}
