export interface signupType {
    username: string;
    email: string;
    password: string;
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