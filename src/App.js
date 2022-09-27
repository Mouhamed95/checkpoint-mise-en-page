import logo from './logo.svg';
import './App.css';

import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

function App() {

  return (
  <div id='main-container' class='container'>
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
      <Form id='sign-in-form' className = "w-100" >
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEVWPXz///9CIG9MMHXe2uSglbP39vlUO3teRoLz8vZjToVTOXpIKnM/HGzJw9W+uMyckLHs6vB2ZJZbQoDY0+CNfqaXiq5QNXhOMHmShaionrl1Y5FtWY1DI2+4r8d9bpg7E2qvpr5VmZQbAAADV0lEQVRoge2b2ZKqMBCGE4NEILIJREV0fP+XPKDl6ElwKqTb9I3/lRep+iRbL+lm/FdVUdY7yT4nuavLonoC2eNH00ohsk+iR3g2ItrGYCedEJ/l/vKF6JJXdpTug4Dv2qfRkx3ts4BoxrJ99GBH+zDT/ZS8wUd2kob96klZWt3YnQiOHte8m9gNBZox0YzslojdclZ9+D55J5lVrAh5sl+1L1ipidi6ZHX4A3ZXVrOPWq6/JHeMCs0IyV999dVDeuWi7aCUziTuodWHyEVNfj4e+o1QmCZZrLm74qg4yAHNPC1i3+ObXiAZqMXs8euLDc7Me7BHejuQsTk/KoQt78ke4XRsDAfYm12l4Fn3ZvMCvN/82THYLfJn8zV0xW12Yip+w46gk26x41Nq6HTpXnM4zz8JNWs2e5eZ0mLFuhn6CXiv2+zN3NdIxRqL3QItmiN7yqIkJhu62ZzZTF9M9jEYm/2YH34Ox14VxtBrOLa60s25NfQQap/PfHeg8z1pMNY7gbqMS/Z59P/IBv8+f8fOUnO50e3YW7Y55RXYXXRly6EzBnZgb3GGPTMqU+JqjMs/4CvGamvrdDVNaIUQk9p+S24psiwYjzYIEaGfv9ZgoP3Y5wElEvVgNz1GMObFrg5qixOAe8153qNMumdsUNDt83HmL/Ag2Dsmikv8O9VdLRQOYPMa22fihaU8b+bisdGKIrNjrWyJXW1ZEw52VF3jMS3Y0WLHDHTM3f0WOVyQI7IFviJTVkQWBfruCW5GRXEPgS9i696adMhWX8SWwnDReb4KxWYqNxc8INs8Z5UGuBHL2KI02ZDH3oVsM0BI/hqNy7bmPCTbPODh2PYZqwjvFpAZXcQezOPNm0DnW65sKwp6NnFmS2HlekZdIG6TSx55yiQPujX3GQdeLS758ymDXs5m0IGZRYd3g/cvB3yD6zssETCZC2FDM00Qdo8eGzgL5C/B2Ge6d8E1/Anck50ghN+e7EJjVB341DvkJ5xE0/I6j3MvkKpMFrGT5twKvPoW57qe4njod0pB/HEb7lTPNBU0aaI626+++mpelPXIlHXYlPXnlHX3lP0GlH0WlP0lpH01vKNY8Xs/Ea8I+6go+8dI++ZI+wVJ+yQ5ZX/oLZ4I3Rf7DxoVOnxZZfXkAAAAAElFTkSuQmCC" alt="image" />  
  <h1 className='text-center' class= 'tapha'>please sign in </h1>
  <Form.Group controlId='sign-in-email-adress' >
    <Form.Control type='email' size='sm' placeholder='Email adress' autocomplet='username'className='position' />
  </Form.Group>
  <Form.Group  controlId='sign-in-password'    className='mb-5'>
    <Form.Control type='password' size='sm' placeholder='mot de pass' autocomplet='username' className='position' />
  </Form.Group>
  <Form.Group controlId='Mot de passe oublie'className='d-flex justify-content-center  mb-4  mt-2'>
    <Form.Check label='Mot de passe oublie' />
  </Form.Group>
  <div className='d-grid'>
  <button variant='primary' size='lg'>Sign in</button>
  </div>
  </Form>
      </div>
    </div>
  </div>
  
  );
}

export default App;
