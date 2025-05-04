// src/User/application/deleteUser_UseCase.ts
import { IUserRepository } from "../domain/repositories/IUserRepositoy";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}