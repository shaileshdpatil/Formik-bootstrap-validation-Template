export const required = (value) => value ? "" : "This Field is Required";
export const email = (value = "") => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email is not valid email'
    : undefined;
