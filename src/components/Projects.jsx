import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import CardGroup from 'react-bootstrap/CardGroup';


function Projects() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }


  return (
    <div className='projects'>
      <Card className="text-center">

        <Card.Header><Card.Title> <strong>PROJECTS</strong> </Card.Title></Card.Header>
        <CardGroup>
          <Card className="text-center">
            <Card.Header><Card.Title> <strong>Susuwataris</strong> </Card.Title></Card.Header>
            <Card.Img variant="top" src="chihiro031.jpg" />
            <Card.Body>
              <Card.Text>
                Little game where you gain points or lose life eating starts. Inspired in the movie Spirited Away.
                I made this game, in a week, at the beginning of the Bootcamp as my first project.
                Many times I'd been tempted in emprove it, but then I realize I love to see my very beginning in web development
                and see my growing during the course.
                <strong><Nav.Link onClick={() => openInNewTab('https://carolinalc.github.io/proyecto-1/')}> Lets try here</Nav.Link></strong>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="text-center">
            <Card.Header><Card.Title><strong>Vinegar-trainer</strong> </Card.Title></Card.Header>
            <Card.Img variant="top" src="bggym.jpg" />
            <Card.Body>
              <Card.Text>
                I develop this project, the second of the Bootcamp, with my partner Iñigo Muñoz. Developed in a week.
                This project is more advanced, with user and admin profiles, possibilities to manage the content according to your role,
                sign-up, log-out, etc. This is a web site to create and control gym routines and the exercises for them.
                <Nav.Link onClick={() => openInNewTab('https://vinegar-trainer.herokuapp.com/')} ><strong>Check the web</strong></Nav.Link>
              </Card.Text>
            </Card.Body>
          </Card>

           <Card className="text-center">
            <Card.Header><Card.Title><strong>React Hotel</strong> </Card.Title></Card.Header>
            <Card.Img variant="top" src="hotel.jpg" />
            <Card.Body>
              <Card.Text>
                This is the third project, and it is a web to search hotels but with a twist, by category instead of location.
                Due to a lack of time, we had many features on the plan that we could not implement, and a few details to polish.
                The good is that we have clear, and located those task and know how to make them.
                I made this project with Maria Diez in a week and half.
                <Nav.Link onClick={() => openInNewTab('https://react-hotel-maria-carol.netlify.app/hotels')} ><strong>Click to navigate</strong></Nav.Link>
              </Card.Text>
            </Card.Body>
          </Card> 
        </CardGroup>
      </Card>
    </div>
  )
}

export default Projects