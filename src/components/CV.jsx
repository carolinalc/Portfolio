import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function CV() {


  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }


  return (
    <div className='curriculum'>
      <Card className="text-center">

        <Card.Header> <Card.Title>EDUCATION</Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Full Stack Web Development</strong>  <br /> Ironhack, from April 2022 to Jun 2022 <br /> <hr />
            9 week intensive web development Bootcamp. Acquisition of high capacities
            for the creation of web pages from the Backend and Frontend environment.
            Realization of high performance projects. Technologies: JavaScript(ES6), React, MongoDB,
            Express, NodeJS, HTML, CSS, .
            Other technologies: Git, Postman, Trello, Stripe, Heroku, Netlify
            <br />
          </Card.Text>
        </Card.Body>

        <Card.Footer className="text-muted">
          <Nav.Link className='LinkCv' onClick={() => openInNewTab('https://drive.google.com/file/d/1Phb9i31zGzFbtKRrXKwdgT_MGBx_oIZ_/view?usp=sharing')}>
            <strong>Resume CV</strong>
          </Nav.Link>
          <Nav.Link className='LinkCv' onClick={() => openInNewTab('https://drive.google.com/file/d/1NVHt49tMvWrHH9Z-jsoRxn3a5xBLaxlh/view?usp=sharing')}>
            <strong>Cover Letter</strong>
          </Nav.Link>
        </Card.Footer>

      </Card>
    </div>
  )
}

export default CV