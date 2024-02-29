
const unixTimestampToTime=require("../utils/unix_to_date")


test('unix time stamp to time', () => {
    expect(unixTimestampToTime(1549312452)).toBe('12:34:12');
});