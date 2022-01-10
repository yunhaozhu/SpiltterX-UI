import { extend } from 'vee-validate';
import { required, email} from "vee-validate/dist/rules";
import { setInteractionMode } from 'vee-validate';

setInteractionMode('lazy');

export const memberRule = extend('member', {
    validate: value => {
        return value >= 2 && value <= 30;
    },
    message: 'This tool only support 2 to 30 people *'
});

export const requiredRule = extend('required', {
    ...required,
    message: 'This field is required *'
});

export const emailRule = extend('email', email);