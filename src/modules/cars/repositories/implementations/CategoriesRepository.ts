import { Category } from "../../models/Category";
import {
  ICategoriesRepository,
  ICategoryCreateDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICategoryCreateDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
  list(): Category[] {
    const category = this.categories;

    return category;
  }
  findByname(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

		return category;
  }
}
