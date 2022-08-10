import moment from "moment";

const API_URL = "http://211.229.232.100:8080/api/v1/rank"

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
                        lastSolvedTime: moment(info.lastAuthTime).format("MM/DD HH:mm"),
                    }
                ))
            })
    }

    getRankHistory(count) {
        return fetch(API_URL + "/history/" + count, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                return result.map((item) => {
                    let obj = {time: item.timestamp.slice(11, 13)}
                    for(let i=0; i<Number(count); i++){
                        obj[item.rank[i].nickname] = item.rank[i].score
                    }
                    return obj
            })
        })
    }
}

export default new RankService();