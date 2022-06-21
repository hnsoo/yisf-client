import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import RankTable from "./RankTable"
import RankService from "../../service/rank";
import RankChart from "./RankChart";

export default function Rank(){
    const [rankData, setRankData] = useState([]);

    // state 불변성을 지키지 않는 코드
    useEffect(() => {
        RankService.getRank("5")
            .then(
                (data) => setRankData(data)
            )
    }, [])

    // state 불변성을 지키는 코드
    // useEffect(() => {
    //     RankService.getRank("5")
    //         .then(
    //             (data) => {
    //                 for(let item of data) {
    //                     setRankData(prevState => [...prevState,
    //                         {
    //                             timestamp: item.timestamp,
    //                             rank: item.rank,
    //                         },
    //                     ])
    //                 }
    //             }
    //         )
    // }, [])

    const columnData = useMemo(
        () => [
            {
                accessor: 'rank',
                Header: 'Rank',
            },
            {
                accessor: 'nickname',
                Header: 'Nickname',
            },
            {
                accessor: 'score',
                Header: 'Score',
            },
            {
                accessor: 'solvedCount',
                Header: 'Solved count',
            },
            {
                accessor: 'lastSolvedTime',
                Header: 'Last solved time',
            },
        ]
    , []);

    return (
        <Container>
            <b>실시간 유저 랭킹</b>
            {/*<RankChart data={data}/>*/}
            <RankChart />
            {/*<RankTable columns={columnData} data={rankData[rankData.length - 16] ?*/}
            {/*    rankData[rankData.length - 16].rank : []}/>*/}
            <RankTable columns={columnData} data={rankData[0] ? rankData[0].rank : []}/>
        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`
