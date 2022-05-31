
const testarData = (data) => {
    const regexTime = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");
    return regexTime.test(data);
};

export const ValidHoras = (e) => {
    if (testarData(e.target.value)) {
        return true
    } else {
        return false
    }
}