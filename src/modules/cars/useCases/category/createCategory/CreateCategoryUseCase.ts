import {
  ICategoriesRepository,
  ICategoryCreateDTO,
} from "../../../repositories/ICategoriesRepository";

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICategoryCreateDTO) {
    console.log('Reload funcionando!');
    const categoryAlreadyExists = this.categoriesRepository.findByname(name);

    if (categoryAlreadyExists) {
      throw new Error(`Category already exists!`);
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}
