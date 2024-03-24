

export function hasUpperCase(str) {
    return str !== str.toLowerCase();
}

export function hasLowerCase(str) {
    return str !== str.toUpperCase();
}

export function hasNumber(str) {
    return /\d/.test(str);
}

export function hasSpecialCharactere(str) {
    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    return specialChars.test(str);
}

export function hasLetter(str) {
    return /[a-zA-Z]/.test(str);
}