import { ISpecificationsRepository } from "../../../repositories/IspecificationsRepository";
import { Specification } from "../../../models/Specification";

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}
