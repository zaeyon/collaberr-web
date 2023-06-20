import {atom} from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        isLogin: false,
        email: null,
        username: null,
        lastName: null,
        firstName: null,
    }
})