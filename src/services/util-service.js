export const utilService = {
    makeId,
    getRandomInt,
    getformatDate
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getformatDate(mDate) {
    if (_isToday(mDate)) {
        const hours = new Date(mDate).getHours()
        const minutes = new Date(mDate).getMinutes()
        const hoursStr = hours < 10 ? '0' + hours : '' + hours
        const minutesStr = minutes < 10 ? '0' + minutes : '' + minutes
        return `${ hoursStr }:${ minutesStr }`
    } else {
        const dateStr = '' + new Date(mDate)
        const firstSepIdx = dateStr.indexOf(' ')
        const secSepIdx = dateStr.indexOf(' ', firstSepIdx + 1)
        const trdSepIdx = dateStr.indexOf(' ', secSepIdx + 1)
        return dateStr.substring(firstSepIdx, trdSepIdx)
    }
}

function _isToday(someDate) {
    const today = new Date()
    someDate = new Date(someDate)
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}