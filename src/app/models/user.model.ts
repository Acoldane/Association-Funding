export class User {
  id?: number
  username?: string
  email?: string
  phone?: number
  password?: string
  userType?: UserType
}

export enum UserType {
  ADMIN = 'ADMIN',
  ASSOC = 'ASSOC',
  USER = 'USER'
}
