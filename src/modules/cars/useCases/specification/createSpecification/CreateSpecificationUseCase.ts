import { ISpecificationCreateDTO } from "./../../../repositories/IspecificationsRepository";
import { ISpecificationsRepository } from "../../../repositories/IspecificationsRepository";

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ISpecificationCreateDTO) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification already exists!`);
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
