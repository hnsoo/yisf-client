import {
    OPEN_FOLDER,
    CLOSE_FOLDER,
    OPEN_NOTICE,
    OPEN_MYPAGE,
    OPEN_RANK,
    OPEN_SPONSOR,
    OPEN_PWNABLE
} from "./types";

export const openFolder = () => ({
    type: OPEN_FOLDER,
});

export const closeFolder = () => ({
    type: CLOSE_FOLDER,
});

export const openNotice = () => ({
    type: OPEN_NOTICE,
});

export const openMypage = () => ({
    type: OPEN_MYPAGE,
});

export const openRank = () => ({
    type: OPEN_RANK,
});

export const openSponsor = () => ({
    type: OPEN_SPONSOR,
});

export const openPwnable = () => ({
    type: OPEN_PWNABLE,
});