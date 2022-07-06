import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


function AboutMe() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }


  return (
    <div className='aboutme'>
      <img src="selfie.jpg" alt="" className='selfie' />

      <p className='name'>Carolina López</p>
      <hr />
      <h4>Full Stack Web Developer  <br />
          // Javascript(ES6), React, ExpressJS,
        NodeJS, MongoDB, Html5, Css & Bootstrap WDFT //
      </h4>
      <br />
      <hr />

      <Card className="text-center">
        <Card.Body >
          <Card.Text className='cardText'>
            I consider myself a resilient profile, a person very passionate about challenges, committed,
            effective, flexible and sociable.
            My professional roles so far have been nursing assistants and administrative assistants and
            they felt too small for me, so they decided to change and study programming in a
            bootcamp, and I'm enthusiastic in all aspects.
            I learned languages like Javascript, React, I know how to work with Mongodb, Node, deploy
            on Netlify, Heroku, etc. My great capacity for adaptation and determination to continue
            growing professionally and personally will make me do the expected job, giving a necessary
            result. <br />
            - Thank you for your time and consideration -
          </Card.Text>
        </Card.Body>
      </Card>

      <br />
      <Card className="text-center">
        <Card.Header><Card.Title>CONTACT</Card.Title></Card.Header>
        <Card.Body>
          <Card.Title>Email: <br /> carolina.lope@hotmail.es</Card.Title> <hr />
          <Card.Title>Linkedin:
            <Nav.Link onClick={() => openInNewTab('https://www.linkedin.com/in/carolina-lopez-webdev/')} >Click here</Nav.Link>
          </Card.Title>
        </Card.Body>
      </Card>
      <hr />
    </div>
  )
}

export default AboutMe