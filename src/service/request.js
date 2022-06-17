class RequestService {
    checkError(res) {
        // reponse가 ok가 아닐 때
        console.log(res)
        if (!res.ok) {
            console.log(res.json())
            throw new Error('400 or 500 에러 발생')
        }
        return res.json()
    }
    retResult(result) {
        if(result.errorCode){
            throw new Error(result.detail)
        }
        console.log(result)
        return result;
    }
    handleError(err) {
        console.log(err)
        return Promise.reject();
    }
}
export default new RequestService();