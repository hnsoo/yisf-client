import React from "react";
import styled from "styled-components";

export default function SolvedList({problems}){
    const solvedList = () => {
        if(problems.length > 0){
            let result = []
            for(let problem of problems){
                result.push(<Li>{problem.title}</Li>);
            }
            return <Ul>{result}</Ul>;
        }
        else return (<NoSolved>no solved</NoSolved>)
    }

    return (solvedList())
}
const Ul = styled.ul`
  font-size: 0.9rem;
  text-align: left;
  list-style-position: outside;
`
const Li = styled.li`
  ::marker{
    color: #e9a1a1;
  }
  list-style-position: inside;
  margin-left: -30px;
`
const NoSolved = styled.div`
  color: gray;
  font-size: 0.9rem;
`