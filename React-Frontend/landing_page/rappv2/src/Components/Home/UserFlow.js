import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";


function UserFlow() {
  return (
    <>
    <h1 style={{marginTop:"3%", fontFamily:"Ubuntu", fontSize:"35px"}}>Lets Get You Going!</h1>
    <ListGroup variant="flush" style={{width:"60%", position: "relative", left:"20%", marginBottom:"5%", fontFamily:"Ubuntu"}}>
      <ListGroup.Item>Log into mindMarket</ListGroup.Item>
      <ListGroup.Item>Go over to Review Content </ListGroup.Item>
      <ListGroup.Item>Watch a video and upload csv</ListGroup.Item>
      <ListGroup.Item>Earn Reward Points! </ListGroup.Item>
    </ListGroup>
    </>
  );
}

export default UserFlow;