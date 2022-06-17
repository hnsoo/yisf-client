import pwnIcon from "../assets/img/gear.png";
import styled from "styled-components";

export default function ProblemIcon({field, title}) {
    const fieldIcon = () => {
        switch (field) {
            case "Pwnable":
                return <img src={pwnIcon} height="100px"/>
            default:
        }
    }

    return (
        <Container>
            {fieldIcon()}
            <span>{title}</span>
        </Container>
    )
}
const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 1rem;
`