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

export interface campaignType {
    id: number;
    state: string;
    title: string;
    platform: string;
    type: string;
    date: string;
}