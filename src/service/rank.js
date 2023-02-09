import moment from "moment";
import {rankHistoryList, rankList} from "../mock";
const API_URL = "http://211.229.232.100:8080/api/v1/rank"

class RankService {
    getRank(count) {
        return Promise.resolve(rankList);
    }

    getRankHistory(count) {
        return Promise.resolve(rankHistoryList);
    }
}

export default new RankService();