import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomRectangleCard({text,title}) {
  return (
    <Card >
     
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;