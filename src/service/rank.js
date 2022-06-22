import RequestService from "./request";

const API_URL = "http://15.165.86.75:8080/api/v1/rank"

class RankService {
    getRank(count) {
        return fetch(API_URL + "/" + count, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((result) => {
                return result.map((info, index) => (
                    {
                        rank: index + 1,
                        nickname: info.nickname,
                        score: info.score,
                        solved: info.solved.length,
                        lastSolvedTime: info.lastAuthTime,
                    }
                ))
            })
    }

    getRankHistory(count) {
        return fetch(API_URL + "/history/" + count, {
            method: 'GET',
        })
            .then((res) => res.json())
    }

    parseTime(time){
        if(time){
            let month = time.slice(5, 7);
            let day = time.slice(8, 10);
            let hour = time.slice(11, 13)
            let minute = time.slice(14, 16)
            let second = time.slice(17, 19)
            return `${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`
        }
        return "no solved"
    }
}

export default new RankService();