# YISF-Client

순천향대학교 정보보호학과에서 주최하는 2022 청소년정보보호페스티벌 해킹대회의 클라이언트 사이트

관련 페이스북: [순천향대학교 청소년 정보보호 페스티벌](https://www.facebook.com/yisf.sch/)

회고록: [2022 청소년정보보호페스티벌 클라이언트 제작 회고](https://velog.io/@hnsoo/2022-%EC%B2%AD%EC%86%8C%EB%85%84%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%A0%9C%EC%9E%91-%ED%9A%8C%EA%B3%A0)

![main-page](https://github.com/hnsoo/yisf-client/blob/master/main-page.png?raw=true)

## Special feature
해킹대회 참가자의 관심사를 고려하여 리눅스 GUI 디자인을 모티브로 하였고, 웹에서 리눅스를 구동하는 듯한 느낌을 전달 하고 싶었다.

GUI OS 처럼 아래와 같은 UI/UX 특징을 구현하였다.
* 아이콘 호버 및 클릭시 배경 효과
* 폴더 크기조절
* 드래그를 통한 폴더 이동
* 다중 폴더 오픈
* 다중 폴더 오픈시 폴더 클릭에 따른 화면 제일 위로의 이동 (z-index)
* ESC키 폴더 닫기 핸들링
* 알림창 오픈

## Demo 사이트
[청소년정보보호페스티벌 클라이언트 데모](http://hnsoo.kro.kr:3000)

고정된 목업 데이터로 간단히 동작 화면을 확인을 목적으로 수정 제작된 데모 사이트이다. 
서버와 통신하는 기능들은 동작하지 않으며 로그인, 로그아웃 버튼 클릭시 각각 메인, 로그인 화면으로 이동한다.

* `/` : 메인 화면
* `/login` : 로그인 화면
* `/ready` : 대회 시작전 카운트 및 대기 화면

## Tech stack
* Javascript
* React JS
* Redux
* Styled Components

## 프로젝트 폴더 구조
```
src
│   index.jsx       # root render, redux store
│   App.js          # react-router-dom
│   App.css         # root css
└───assets          # img, font 저장소
└───components      # 재사용가능한 요소 (dock-bar, top-bar, folder...)
└───pages           # 라우팅에 사용되는 페이지
└───redux           # 리덕스 관련 (actions, reducers, store)
└───services        # 서버 요청을 통한 데이터 송수신
```

## Authentication
### JWT
* 토큰 방식의 인증 구조 
* `token` - 인증 토큰
* `tokenExpired` - 토큰 만료 시간
* `refresh` - 토큰 재요청 토큰
* 서버로 API를 요청할 때 요청 헤더에 `token`을 추가하여 인가된 사용자임을 서버에 확인 시키고 결과 데이터를 제공 받음 

### Reissue
* 새로운 토큰 요청 기능
* `token`, `refresh`를 서버로 전송
* 전송한 `token`, `refresh`가 유효할 경우 새로운 `token`, `tokenExpired`, `refresh` 지급

### Check session
* 토큰 유효기간 확인 기능
* 토큰이 만료되었을 경우 `Reissue` 실행

## Service
* 대기실
* 로그인
* 회원정보 조회
* 비밀번호 변경
* 게시글 로드
* 유저 랭킹 조회
* 문제 파일 다운로드
* 문제 맞추기
* 실시간 알림 수신

## 대기실
* 대회 시작전 유저 접속의 리다이렉션 페이지
* 대회 시작까지의 카운트다운 표시 

## 로그인
* 인가된 사용자가 해당 사이트에 접속할 수 있게하는 기능
* Id, Password를 서버로 전송 후 유효한 계정일 경우 `token`, `tokenExpired`, `refresh`를  지급 받음

## 회원정보 조회
* 아이디, 이름, 닉네임, 이메일, 점수 등을 표시
* 해당 유저가 푼 문제들을 문제 카테고리별로 표시 

## 비밀번호 변경
* 유저의 비밀번호 변경 기능
* 유저의 입력을 비밀번호 양식과 비교하여 양식에 맞지 않을 경우 서비스 요청을 할 수 없게 제작

## 게시글 로드
* 문제, 공지사항, 대회정보 로드

## 유저 랭킹 조회
* 현재 유저들의 점수를 순위별로 확인 할 수 있는 기능
* 현재시각 상위 5명의 점수를 그래프로 표시
* 1시간 간격으로 그 시각 상위 5명의 점수를 그래프로 표시 

## 문제 파일 다운로드
* 문제에 사용되는 파일 다운로드

## 문제 맞추기
* 정답을 서버로 전송후 유효한지 체크 후 결과를 전송 받음

## 실시간 알림 수신
* 관리자 페이지에서 전송한 알림을 수신
* 1분 간격으로 알림 수신을 요청하여 알림이 있을 경우 알림창에 표시
* 서버로 알림 삭제 요청으로 알림 삭제 가능
