import {atom} from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        isLogin: false,
        email: "",
        username: "",
        lastName: "",
        firstName: "",
        role: "",
    }
})

export const isVisDropdownState = atom({
    key: 'isVisDropdownState',
    default: false,
})

export const toastState = atom({
    key: 'toastState',
    default: {
        visible: false,
        message: "",
        type: "",
    }
})