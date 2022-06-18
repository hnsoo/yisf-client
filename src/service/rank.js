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
                    return datas.map((data, index) =>
                        ({
                            "rank": index+1,
                            "nickname": data.nickname,
                            "score": data.score,
                            "solvedCount": data.probIdList.length,
                            "lastSolvedTime": data.lastAuthTime,
                        })
                    )
                }
            )
            .catch((err) => RequestService.handleError(err))
    }
}

export default new RankService();