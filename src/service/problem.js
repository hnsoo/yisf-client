import AuthService from "../service/auth";

const API_URL = "http://15.165.86.75:8080/api/v1/problem"

class ProblemService {
    problemList(field) {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL + "/" + field, {
                    method: 'GET',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    }
                })
                    .then((res) => res.json())
                    .then((result) => {
                        if(result.errorCode) throw new Error(result);
                        return result;
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch((err) =>
                Promise.reject(err)
            );
    }
    sendFlag(problemId, flag) {
        return AuthService.checkSession()
            .then(() =>
                fetch(API_URL + "/" + problemId, {
                    method: 'POST',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: new URLSearchParams({
                        flag: flag,
                    })
                })
                    .then((res) => {
                        if(res.ok) return false
                        return res.json()
                    })
                    .then(result => {
                        if(result){
                            throw new Error(result.message)
                        }
                        return Promise.resolve()
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch((err) =>
                Promise.reject(err)
            );
    }
    downloadFile(fileIdx, fileName) {
        return AuthService.checkSession()
            .then(() =>
                fetch("http://15.165.86.75:8080/api/v1/file/" + fileIdx, {
                    method: 'GET',
                    responseType: 'blob',
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
                    .then((res) => {
                        // 200번대 응답이 아닐경우 에러 반환
                        if(!res.ok)
                            throw new Error()
                        return res.blob()
                    })
                    .then((result) => {
                        console.log(fileName)
                        // 파일 다운로드
                        const url = window.URL.createObjectURL(new Blob([result]));
                        const link = document.createElement('a');
                        link.href = url
                        link.setAttribute('download', fileName);
                        document.body.appendChild(link);
                        link.click();
                    })
                    .catch((err) => Promise.reject(err))
            )
            .catch((err) =>
                Promise.reject(err)
            );
    }
}

export default new ProblemService()