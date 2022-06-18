import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import RankTable from "./RankTable"
import RankService from "../../service/rank";
import RankChart from "./RankChart";

export default function Rank(){
    const [data, setData] = useState([]);

    useEffect(() => {
        RankService.getRank("5")
            .then(
                (data) => setData(data)
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
            <RankTable columns={columnData} data={data}/>
        </Container>
    );
}
const Container = styled.div`
  //display: flex;
  text-align: left;
  flex-direction: column;
  padding: 0.25rem;
`
