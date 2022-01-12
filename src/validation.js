import { extend } from 'vee-validate';
import { required, email, min, max, min_value, integer} from "vee-validate/dist/rules";
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

export const minRule = extend('min', {
    ...min,
    params: ['length'],
    message: '{_field_} must be at least {length} characters *'
});

export const maxRule = extend('max', {
    ...max,
    params: ['length'],
    message: '{_field_} may not be greater than {length} characters'
});

export const minValueRule = extend('min_value', {
    ...min_value,
    params: ['min'],
    message: '{_field_} must be at least {min}'
});

export const integerRule = extend('integer', {
    ...integer,
    message: '{_field_} must be an integer *'
});

export const emailRule = extend('email', email);