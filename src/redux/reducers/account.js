import {LOAD_MYPAGE_FAIL, LOAD_MYPAGE_SUCCESS} from "../actions/types";

const initialState = {
    username: null,
    nickname: null,
    realName: null,
    email: null,
    score: 0,
    role: null,
    reversing: [],
    forensic: [],
    web: [],
    pwnable: [],
    misc: [],
    crypto: [],
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_MYPAGE_SUCCESS:
            let result = {
                ...state,
                username: payload.info.username,
                nickname: payload.info.nickname,
                realName: payload.info.realName,
                email: payload.info.email,
                score: payload.info.score,
                role: payload.info.role,
            }
            if(payload.info.role === "ADMIN"){
                return result
            }
            const obj = {
                reversing: [],
                forensic: [],
                web: [],
                pwnable: [],
                misc: [],
                crypto: [],
            }
            console.log(payload.info)
            for(let problem of payload.info.solved){
                console.log(obj)
                console.log(problem.type)
                obj[problem.type.toLowerCase()].push({id: problem.id, title: problem.title})
            }
            result['reversing'] = obj['reversing']
            result['forensic'] = obj['forensic']
            result['pwnable'] = obj['pwnable']
            result['web'] = obj['web']
            result['misc'] = obj['misc']
            return result;

        case LOAD_MYPAGE_FAIL:
            return {
                ...state,
                username: null,
                nickname: null,
                realName: null,
                email: null,
                score: null,
                role: null,
                reversing: [],
                forensic: [],
                web: [],
                pwnable: [],
                misc: [],
                crypto: [],
            };
        default:
            return state;
    }
}