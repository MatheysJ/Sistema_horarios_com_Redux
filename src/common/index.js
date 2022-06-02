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

export const getTotal = (setDado, list) => {

    let horas = Math.floor(list.reduce((totalMins, list) => totalMins + list.totalMins, 0) / 60)
    let mins = (list.reduce((totalMins, list) => totalMins + list.totalMins, 0) % 60)

    let total = (horas + ':' + mins)

    {
      horas || mins
        ?
        setDado(total)
        :
        setDado(0)
    }
}