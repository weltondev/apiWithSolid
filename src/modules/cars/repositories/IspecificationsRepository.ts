import { Specification } from "../models/Specification";

export interface ISpecificationCreateDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  list(): Specification[];
  findByName(name: string): Specification;
  create({ name, description }: ISpecificationCreateDTO): void;
}
