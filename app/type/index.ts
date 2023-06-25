export interface signupType {
    username: string;
    email: string;
    password: string;
    password_confirm: string;
    role: string;
}

export interface loginType {
    email: string;
    password: string;
}


export interface userType {
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}