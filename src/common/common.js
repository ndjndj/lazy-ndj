

export const calcYear = (milliSec) => {
    const dayMilliSec = 1000 * 60 * 60 * 24;
    const year = 365.25; // うるう年を考慮

    return Math.floor((milliSec) / (dayMilliSec) / year);
}

export const calcDateDiffMilliSec = (fromTime, toTime) => {
    return fromTime.getTime() - toTime.getTime();
}
