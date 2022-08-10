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
    }
    calculateRemainTime(targetTime) {
        let now = new Date().getTime()
        let time = new Date(targetTime).getTime()
        let remainDate = time - now;
        let result = {}
        // 남은시간 % 하루 / 1시간 + (남은 Day * 24)
        result['hours'] = Math.floor((remainDate % (1000 * 60 * 60 * 24)) / (1000*60*60) +
            (remainDate / (1000 * 60 * 60 * 24)) * 24)
        // 남은시간 % 1시간 / 1분
        result['minutes'] = Math.floor((remainDate % (1000 * 60 * 60)) / (1000*60))
        // 남은시간 % 1분 / 1초
        result['seconds'] = Math.floor((remainDate % (1000 * 60)) / 1000)
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