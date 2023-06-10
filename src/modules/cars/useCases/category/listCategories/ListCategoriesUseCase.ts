import { Category } from "../../../models/Category";
import { ICategoriesRepository, ICategoryCreateDTO } from "../../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private CategoriesRepository: ICategoriesRepository) {}

	execute(): Category[] {
		return this.CategoriesRepository.list();
	}
}
