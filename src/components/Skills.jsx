import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Skills() {
  return (
    <div className='curriculum'>
      <Card className="text-center">

        <Card.Header><Card.Title> <strong>SKILLS</strong> </Card.Title></Card.Header>

        <Row md={2} className="g-3">
          <Col>
            <Card>
              <Card.Header> <strong>Hard skills</strong> </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup>JavaScript</ListGroup>
                  <ListGroup>React</ListGroup>
                  <ListGroup>Axios</ListGroup>
                  <ListGroup>JWT</ListGroup>
                  <ListGroup>JSON</ListGroup>
                  <ListGroup>GitHub</ListGroup>
                  <ListGroup>Bootstrap</ListGroup>
                  <ListGroup>Express.js</ListGroup>
                  <ListGroup>MongoDB</ListGroup>
                  <ListGroup>NodeJS</ListGroup>
                  <ListGroup>REST APIs</ListGroup>
                  <ListGroup>CSS</ListGroup>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Header> <strong>Soft skills</strong> </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup>Resilient</ListGroup>
                  <ListGroup>Communicative</ListGroup>
                  <ListGroup>Patient</ListGroup>
                  <ListGroup>Hardworking</ListGroup>
                  <ListGroup>Committed</ListGroup>
                  <ListGroup>Willing to grow and learn</ListGroup>
                  <ListGroup>Tidy</ListGroup>
                  <ListGroup>Organized</ListGroup>
                  <ListGroup>Educated</ListGroup>
                  <ListGroup>Respectful</ListGroup>
                  <ListGroup>Friendly</ListGroup>
                  <ListGroup>Confident</ListGroup>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Card>
    </div>
  )
}

export default Skills