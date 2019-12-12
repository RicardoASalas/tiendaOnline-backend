function isValidPassword (password) {

    const enoughCharacters = password.length >= 8;
    const containsUpperCase = (/[A-Z]/).test(password);
    const containLowerCase = /[a-z]/.test(password);
    const containNumbers = /[0-9]/.test(password);

    if (enoughCharacters && containLowerCase && containNumbers && containsUpperCase) {
        return true;
    } else {
        throw new Error('invalidPasswordError');
    }

}


module.exports = {
  isValidPassword,
};