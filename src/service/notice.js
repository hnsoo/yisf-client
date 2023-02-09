import AuthService from "./auth";
import {noticeList} from "../mock"
const API_URL = "http://211.229.232.100:8080/api/v1/notice"

class NoticeService {
    getNotice() {
        return Promise.resolve(noticeList);
    }
}
export default new NoticeService();