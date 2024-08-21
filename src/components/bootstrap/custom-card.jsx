import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDNALoader from '../loader/loader';
import InfiniteLoader from '../loader/infinite-loader';
import CustomToasts from '../toasts/toasts';
import InstagramHeart from '../heart/instagram-heart';

function CustomRectangleCard({text,title}) {
  return (
    <Card >
     
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <InfiniteLoader color={"red"} />
        <CustomDNALoader   width={"100"}  visible={true}  />
        <CustomToasts  message={"I am card"} />
        <InstagramHeart/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;