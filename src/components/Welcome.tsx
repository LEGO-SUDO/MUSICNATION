import UserService from '../services/UserService'
import Button from 'react-bootstrap/Button'
import welcome from '../assets/bgimg3.jpg'
const Welcome = () => (
  <div
    className='jumbotron'
    style={{
      backgroundImage: `url(${welcome})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      height: '100vh',
      opacity: '0.8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button variant='dark' size='lg' onClick={() => UserService.doLogin()}>
      Login To View The App
    </Button>
  </div>
)

export default Welcome
