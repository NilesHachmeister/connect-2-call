import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import '../homepg.css';
import { Form } from 'react-bootstrap';

const Header = () => {


  const [siteLanguage, setSiteLanguage] = useState({ siteLanguage: 'en' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSiteLanguage({ ...siteLanguage, [name]: value });
    localStorage.setItem("i18nextLng", value);
  };


  useEffect(() => {
    const currentLanguage = localStorage.getItem("i18nextLng");
    setSiteLanguage(currentLanguage)
  });


  return (
    <>
      <header>
        <div className="header">

          <a className="button" href="/">
            Home
          </a>
          <a className="button" href="/">
            Login
          </a>
          <a className="button" href="/signupform">
            Sign Up
          </a>
          <a className="button" href="/board">
            Broad
          </a>
          <a className="button" href="/new-post">
            New Post
          </a>
          <br />
          <div id="site-language">
            <Form.Group id="site-language-form">
              <Form.Label id="site-language-form-label" htmlFor='spokenLanguage' onChange={handleInputChange}>Site Language:
                <select name='spokenLanguage' value={siteLanguage}>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="ru">Русский</option>
                </select></Form.Label>
              <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
            </Form.Group>
          </div>

        </div>




      </header>

    </>
  );
}

export default Header;


// const AppNavbar = () => {
//   // set modal display state
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Navbar bg='dark' variant='dark' expand='lg'>
//         <Container fluid>
//           <Navbar.Brand as={Link} to='/'>
//             Google Books Search
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='navbar' />
//           <Navbar.Collapse id='navbar'>
//             <Nav classNameName='ml-auto'>
//               <Nav.Link as={Link} to='/'>
//                 Search For Books
//               </Nav.Link>
//               {/* if user is logged in show saved books and logout */}
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to='/saved'>
//                     See Your Books
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* set modal data up */}
//       <Modal
//         size='lg'
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         aria-labelledby='signup-modal'>
//         {/* tab container to do either signup or login component */}
//         <Tab.Container defaultActiveKey='login'>
//           <Modal.Header closeButton>
//             <Modal.Title id='signup-modal'>
//               <Nav variant='pills'>
//                 <Nav.Item>
//                   <Nav.Link eventKey='login'>Login</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Tab.Content>
//               <Tab.Pane eventKey='login'>
//                 <LoginForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//               <Tab.Pane eventKey='signup'>
//                 <SignupForm handleModalClose={() => setShowModal(false)} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Modal.Body>
//         </Tab.Container>
//       </Modal>
//     </>
//   );
// };

// export default AppNavbar;
