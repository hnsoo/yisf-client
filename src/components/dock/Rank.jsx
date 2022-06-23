import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import RankTable from "./RankTable"
import RankService from "../../service/rank";
import RankChart from "./RankChart";

export default function Rank(){
    const [tableData, setTableData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [topPlayer, setTopPlayer] = useState([]);

    useEffect(() => {
        RankService.getRank("5")
            .then(
                (data) => {
                    setTableData(data)
                    return data
                }
            )
            .then(
                (data) => {
                    const count = "5"
                    RankService.getRankHistory(count)
                        .then(
                            (res) => {
                                // 최상위 count 명 명단 설정
                                let name = []
                                for(let i = 0; i < Number(count); i++){
                                    name.push(data[i].nickname);
                                }
                                setTopPlayer(name)

                                // 현재 차트 설정
                                let now = new Date()
                                let obj = {time: now}
                                for(let i = 0; i < Number(count); i++){
                                    obj[data[i].nickname] = data[i].score
                                }
                                res.push(obj)
                                setChartData(res)
                            }
                        )
                }
            )
    }, [])

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
                accessor: 'solved',
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
            <RankChart data={chartData} player={topPlayer}/>
            <RankTable columns={columnData} data={tableData}/>
        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`
