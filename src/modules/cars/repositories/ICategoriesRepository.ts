import { Category } from "../models/Category";

export interface ICategoryCreateDTO {
	name: string,
	description: string
}

export interface ICategoriesRepository {
	list(): Category[];
	findByname(name: string): Category;
	create({ name, description }: ICategoryCreateDTO): void;
}