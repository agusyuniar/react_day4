import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const Kartu = (props) => {
  return (
    <CardGroup className='col-3'>
      <Card>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle><h3>Kartu Nama</h3></CardTitle>
          <CardSubtitle>{props.contoh}</CardSubtitle>
          <CardSubtitle>{props.contoh2}</CardSubtitle>
          <CardText>{props.contoh3}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      
    </CardGroup>
  );
};

export default Kartu;