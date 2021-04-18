
export const BIRTHDAY = new Date('1994/06/17 02:03:00');

export const calcDiffYear = (fromTime, toTime) => {
    const dayMilliSec = 1000 * 60 * 60 * 24; //一日の秒数
    const year = 365.25; // うるう年を考慮
    const diff = fromTime.getTime() - toTime.getTime();
    return Math.floor((diff) / (dayMilliSec) / year);
}
