export interface BaseUser {
    email: string,
    password: string,
}

export interface LoginUser extends BaseUser {
}

export interface RegisterUser extends BaseUser {
    name: string,
 
}

export interface User extends BaseUser {
    id: number,
}