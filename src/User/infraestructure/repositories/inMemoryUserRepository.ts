import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepositoy';

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

update(user: User): Promise<User> {
    const index = this.users.findIndex(user => user.idUsuario === user.idUsuario);
    if (index !== -1) {
      this.users[index] = user;
      return Promise.resolve(user);
    } else {
      return Promise.reject(new Error('User not found'));
    }
}
  
  readById(idUsuario: string): Promise<User> {
    const user = this.users.find(user => user.idUsuario === idUsuario);
    if (user) {
      console.log(user.idUsuario);
      return Promise.resolve(user);
    } else {
      return Promise.reject(new Error('User not found'));
    }
  }

  delete(idUsuario: string): Promise<void> {
    this.users = this.users.filter(user => user.idUsuario !== idUsuario);
    return Promise.resolve();
  }

  readAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }
}
