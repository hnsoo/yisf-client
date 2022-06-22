class RequestService {
    checkError(res) {
        // reponse가 ok가 아닐 때
        console.log(res)
        if (!res.ok) {
            // console.log(res)
            throw new Error(res.status)
        }
        return res.json()
    }
    retResult(result) {
        if(result.errorCode){
            throw new Error(result)
        }
        console.log(result)
        return result;
    }
    handleError(err) {
        console.log(err)
        return Promise.reject(err);
    }
}
export default new RequestService();