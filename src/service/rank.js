import RequestService from "./request";

const API_URL = "http://15.165.86.75:8080/api/v1/rank"

class RankService {
    getRank(count) {
        return fetch(API_URL + "/" + count, {
            method: 'GET',
        })
            .then((res) => RequestService.checkError(res))
            .then(
                (result) => {
                    let datas = RequestService.retResult(result)
                    return datas.nowRank.map((data, index) =>
                        ({
                            "rank": index+1,
                            "nickname": data.nickname,
                            "score": data.score,
                            "solvedCount": data.probIdList.length,
                            "lastSolvedTime": this.parseTime(data.lastAuthTime),
                        })
                    )
                }
            )
            .catch((err) => RequestService.handleError(err))
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