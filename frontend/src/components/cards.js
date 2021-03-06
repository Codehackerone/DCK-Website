import React, {Component} from 'react';
import { Button, Container, Row, Col, Card} from 'react-bootstrap';


class Cards extends Component{

  render(){
    return(
        <Container style={{
          marginLeft: 10 + `%`,
          marginRight: 10 + `%`,
          marginBottom: 10 + `em`,
          marginTop: 10 + `em`,
          justifyContent: `space-evenly`
          }}>
        <Row justify-content-around>
        <Col xs={10} md={6}  className = "align-self-center">
        <Card className = "card">
        <Card.Img variant = "top" className = "card-events-img" />
        <Card.Body>
          <Card.Title>Events</Card.Title>
          <Card.Text>
          Here at DC KGEC we put the fun in functions and events. Attend Study Jams/ Hackathons/ Developer Conferences to learn more about the latest technologies.
          </Card.Text>
          <Button variant="warning">Know More</Button>
        </Card.Body>
      </Card>
      </Col>
        <Col xs={10} md={6}  className = "align-self-center">
        <Card className = "card">
        <Card.Img variant="top" className = "card-magazine-img"/>
        <Card.Body>
          <Card.Title>Refresh - the Official Magazine</Card.Title>
          <Card.Text>
          We put in all our activities into our half-yearly magazine, Refresh! Exciting articles on tech, and contributions from our student members.
          </Card.Text>
          <Button variant="success">Read</Button>
        </Card.Body>
      </Card>
      </Col>
        
      </Row>
        
      </Container>
    ); 
  }
}
export default Cards;