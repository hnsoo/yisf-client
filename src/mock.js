import moment from "moment/moment";

export const username = "khsoo2439"
export const nickname = "KONN"
export const realName = "김현수"
export const email = "khsoo2439@naver.com"
export const score = 1200

export const solvedPwnable = ["포너블1"];
export const solvedWeb = ["웹1"];
export const solvedForensic = ["포렌식1", "포렌식2"];
export const solvedReversing = [];
export const solvedMisc = [];

export const noticeList = [
    {
        title: '공지사항2',
        content: "<div>어드민 페이지의 공지사항 에디터에서 작성한 내용이 표시됩니다.</div>",
        createTime: new Date("2022-02-07"),
        updateTime: new Date("2022-02-07"),
    },
    {
        title: '공지사항1',
        content: "<div>드민 페이지의 공지사항 에디터에서 작성한 내용이 표시됩니다.</div>",
        createTime: new Date("2022-02-06"),
        updateTime: new Date("2022-02-06"),
    }
    ];

export const rankList = [
    {
        rank: 1,
        nickname: 'KONN',
        score: 1200,
        solved: 4,
        lastSolvedTime: "02/08 16:12",
    },
    {
        rank: 2,
        nickname: 'JAMES',
        score: 1100,
        solved: 3,
        lastSolvedTime: "02/08 13:10",
    },
    {
        rank: 3,
        nickname: 'ALICE',
        score: 900,
        solved: 2,
        lastSolvedTime: "02/08 16:19",
    },
    {
        rank: 4,
        nickname: 'BAB',
        score: 800,
        solved: 2,
        lastSolvedTime: "02/08 09:10",
    },
    {
        rank: 5,
        nickname: 'LUCA',
        score: 400,
        solved: 1,
        lastSolvedTime: "02/08 09:10",
    },
    {
        rank: 6,
        nickname: 'BLAKE',
        score: 200,
        solved: 1,
        lastSolvedTime: "02/08 16:12",
    },
    {
        rank: 7,
        nickname: 'SUTTON',
        score: 100,
        solved: 1,
        lastSolvedTime: "02/08 13:10",
    },
    {
        rank: 8,
        nickname: 'ROMERO',
        score: 0,
        solved: 0,
        lastSolvedTime: "",
    },
    {
        rank: 9,
        nickname: 'MORALES',
        score: 0,
        solved: 0,
        lastSolvedTime: "",
    },
    {
        rank: 10,
        nickname: 'BUCK',
        score: 0,
        solved: 0,
        lastSolvedTime: "",
    },
    ];
export const rankHistoryList = [
    {
        time: moment().subtract(5, 'h').format("HH"),
        "KONN": 0,
        'JAMES': 0,
        "ALICE": 0,
        'BAB': 0,
        'LUCA': 0,
    },
    {
        time: moment().subtract(4, 'h').format("HH"),
        "KONN": 400,
        'JAMES': 0,
        "ALICE": 100,
        'BAB': 0,
        'LUCA': 0,
    },
    {
        time: moment().subtract(3, 'h').format("HH"),
        "KONN": 400,
        'JAMES': 800,
        "ALICE": 100,
        'BAB': 0,
        'LUCA': 0,
    },
    {
        time: moment().subtract(2, 'h').format("HH"),
        "KONN": 800,
        'JAMES': 1100,
        "ALICE": 100,
        'BAB': 400,
        'LUCA': 400,
    },
    {
        time: moment().subtract(1, 'h').format("HH"),
        "KONN": 1000,
        'JAMES': 1100,
        "ALICE": 900,
        'BAB': 800,
        'LUCA': 400,
    },
]

export const reversingList = [
    {
        id: 0,
        type: "reversing",
        title: "리버싱1",
        author: "ADMIN",
        solve: 1,
        calculatedScore: 400,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 1,
        type: "reversing",
        title: "리버싱2",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 200,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 2,
        type: "reversing",
        title: "리버싱3",
        author: "ADMIN",
        solve: 0,
        calculatedScore: 600,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },]
export const forensicList = [
    {
        id: 3,
        type: "forensic",
        title: "포렌식1",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 300,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 4,
        type: "forensic",
        title: "포렌식2",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 300,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 5,
        type: "forensic",
        title: "포렌식3",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 600,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
]
export const webList = [
    {
        id: 6,
        type: "web",
        title: "웹1",
        author: "ADMIN",
        solve: 1,
        calculatedScore: 200,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 7,
        type: "web",
        title: "웹2",
        author: "ADMIN",
        solve: 1,
        calculatedScore: 400,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 8,
        type: "web",
        title: "웹3",
        author: "ADMIN",
        solve: 0,
        calculatedScore: 600,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
]
export const pwnableList = [
    {
        id: 9,
        type: "pwnable",
        title: "포너블1",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 300,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 10,
        type: "pwnable",
        title: "포너블2",
        author: "ADMIN",
        solve: 1,
        calculatedScore: 400,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 11,
        type: "pwnable",
        title: "포너블3",
        author: "ADMIN",
        solve: 3,
        calculatedScore: 200,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
]
export const miscList = [
    {
        id: 12,
        type: "misc",
        title: "미스크1",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 300,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 13,
        type: "misc",
        title: "미스크2",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 300,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
    {
        id: 14,
        type: "misc",
        title: "미스크3",
        author: "ADMIN",
        solve: 2,
        calculatedScore: 300,
        description: "<div>어드민 페이지의 문제 에디터에서 작성한 문제 내용이 표시됩니다.</div>"
    },
]

export const notificationList = [
    {
        id: 0,
        title: '알람1',
        content: "알림 내용",
        createTime: "2022-02-08 12:00"
    },
    {
        id: 1,
        title: '알람2',
        content: "알림 내용",
        createTime: "2022-02-08 12:00"
    },
    {
        id: 2,
        title: '알람3',
        content: "알림 내용",
        createTime: "2022-02-08 12:00"
    }
]