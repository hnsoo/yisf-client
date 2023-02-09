import styled from "styled-components";

export default function SubmitResult({setIsSubmitResultOpened, text}){

    return (
        <Container>
            <Content>
                정답이 아닙니다
            </Content>
            <Confirm>
                <Button onClick={() => setIsSubmitResultOpened(false)}>확인</Button>
            </Confirm>
        </Container>
    )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Content = styled.div`
  display: flex;
`
const Confirm = styled.div`
  display: flex;
  justify-content: right;
`
const Button = styled.button`
  padding: 7px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #AC3652;
  :hover {
    cursor: pointer;
    background: #9C2642;
  }
`