import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {MdOutlineClose} from "react-icons/md"
import moment from "moment";
import {removeNotification} from "../redux/actions/notification";

export default function NotificationModal(){
    const notifications = useSelector(state => state.notification.notifications)
    const dispatch = useDispatch();

    const clickRemoveNotification = (notificationId) => {
        dispatch(removeNotification(notificationId))
    }

    const showNotifications = () => {
        if(notifications && notifications.length > 0){
            return notifications.map((item, idx) =>
                <Element>
                        <Top>
                            <Title>{item.title}</Title>
                            <div>
                                <Time>
                                    {moment(item.createTime).format("HH:mm")}
                                </Time>
                                <Close>
                                    <MdOutlineClose onClick={() => clickRemoveNotification(item.id)} />
                                </Close>
                            </div>
                        </Top>
                        <Content>
                            {item.content}
                        </Content>
                </Element>
            )
        }
        else{
            return <NoContent>No notification</NoContent>
        }
    }
    return (
        <Container>
            {showNotifications()}
        </Container>
    )
}
const Container = styled.div`
  background: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  backdrop-filter: blur(15px);
  //box-shadow: 1px -1px 10px 1px rgba(0,0,0,0.1);
`
const Element = styled.div`
  background-color: #6f103c;
  box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
  box-sizing: border-box;
  backdrop-filter: blur(33px);
  background-blend-mode: overlay;
  color: #eaeaea;
  margin: 10px;
  //border-radius: 12px;
  border-radius: 10px;
  padding: 0.7rem 1rem 1rem 1rem;
  font-size: 0.9rem;
  //border: 2px solid floralwhite;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  font-family: PretendardBold, sans-serif;
`
const Close = styled.span`
  margin-left: 15px;
  :hover {
    cursor: pointer;
  }
`
const Time = styled.span`
  color: #aaaaaa;
  font-size: small;
`
const Content = styled.div`
  color: #aaaaaa;
`
const NoContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #eaeaea;
  align-items: center;
  justify-content: center;
`