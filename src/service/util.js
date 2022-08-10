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
}

export default new UtilService();