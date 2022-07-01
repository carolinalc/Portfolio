import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function CV() {
  return (
    <div className='curriculum'>
      <Card className="text-center">

        <Card.Header> <Card.Title>EDUCATION</Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Full Stack Web Development</strong>  <br /> Ironhack, from April 2022 to Jun 2022 <br /> <hr />
            9 week intensive web development Bootcamp. Acquisition of high capacities
            for the creation of web pages from the Backend and Frontend environment.
            Realization of high performance projects. Technologies: JavaScript(ES6), React,MongoDB,
            Express, NodeJS, HTML, CSS, .
            Other technologies: Git, Postman, Trello, Stripe, Heroku, Netlify
            <br />
          </Card.Text>
        </Card.Body>

        <Card.Footer className="text-muted">
          <Nav.Link className='LinkCv' href="https://drive.google.com/file/d/1dlBAQT4PcI5WGFaEiaGMl7mmeAnRrWmg/view?usp=sharing" download><strong>Resume CV</strong></Nav.Link>
        </Card.Footer>

      </Card>
    </div>
  )
}

export default CV