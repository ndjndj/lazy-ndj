

export const calcMilliSecToYear = (milliSec) => {
    const dayMilliSec = 1000 * 60 * 60 * 24; //一日の秒数
    const year = 365.25; // うるう年を考慮

    return Math.floor((milliSec) / (dayMilliSec) / year);
}

export const calcDateDiffMilliSec = (fromTime, toTime) => {
    return fromTime.getTime() - toTime.getTime();
}

export const calc
