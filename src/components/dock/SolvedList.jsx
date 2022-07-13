import React from "react";

export default function SolvedList({problems}){
    const Mysolved = () => {
        if(problems.length > 0){
            let result = []
            for(let problem of problems){
                result.push(<li>{problem.title}</li>);
            }
            return result;
        }
        else return (<div style={{color: "gray"}}>no solved</div>)
    }

    return (Mysolved())
}