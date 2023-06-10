import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { Request, Response } from "express";


export class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

	handle(req: Request, res: Response) : Response {
		const categories = this.listCategoriesUseCase.execute();

		return res.status(200).send( { categories } );
	}
}