const API_URL = "http://211.229.232.100:8080/api/v1/config"

class UtilService {
    getTime() {
        return fetch(API_URL, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((result) => ({
                enableOpenTimer: result.enableOpenTimer,
                openTime: result.openTime,
                endTime: result.endTime,
            }))
            .catch(() => Promise.reject())
    }
    calculateRemainTime(targetTime) {
        let result = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
        let now = new Date().getTime()
        let time = new Date(targetTime).getTime()
        let remainDate = time - now;
        let _second = 1000;
        let _minute = _second * 60;
        let _hour = _minute * 60;
        let _day = _hour * 24;
        // 목표 시간을 지났을 경우
        if (remainDate < 0)
            return result
        // 남은시간 % 하루 / 1시간 + (남은 Day * 24)
        result['hours'] = Math.floor((remainDate % _day) / _hour) + Math.floor(remainDate / _day) * 24;
        // 남은시간 % 1시간 / 1분
        result['minutes'] = Math.floor((remainDate % _hour) / _minute);
        // 남은시간 % 1분 / 1초
        result['seconds'] = Math.floor((remainDate % _minute) / _second);
        return result
    }
    countDown(hours, minutes, seconds) {
        let result = {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            clear: false
        }
        if (seconds > 0) {
            result['seconds'] = seconds - 1;
        }
        if (seconds === 0) {
            if ((minutes) > 0){
                result['minutes'] = minutes - 1;
                result['seconds'] = 59
            }
            else if (minutes === 0){
                if ((hours) > 0){
                    result['hours'] = hours - 1
                    result['minutes'] = 59
                    result['seconds'] = 59
                }
                else {
                    result['clear'] = true
                }
            }
        }
        return result;
    }
}

export default new UtilService();