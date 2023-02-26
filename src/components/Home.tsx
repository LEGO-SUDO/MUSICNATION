import { useEffect, useState } from 'react'
import bgimg from '../assets/bgimg2.png'
import plimg from '../assets/playlist.jpeg'
import './main.css'
import Card from 'react-bootstrap/Card'
import UserService from '../services/UserService'

const Home = () => {
  const [favourite, setFavourite] = useState([])
  const [playlists, setPlaylists] = useState([''])

  useEffect(() => {
    const content = JSON.parse(localStorage.getItem('favourite') || '[]')
    const pl = JSON.parse(localStorage.getItem('playlist') || '[]')
    {
      content ? setFavourite(content) : setFavourite([])
    }
    {
      pl ? setPlaylists(pl) : setPlaylists([''])
    }
  }, [])

  return (
    <>
      <div className='topimg' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='topcontent'>WELCOME {UserService.getUsername()}</div>
      </div>
      <div className='sectionlabels'>
        FAVOURITES
        <div
          style={{
            flex: 1,
            height: '2px',
            margin: '10px',
            backgroundColor: '#818181',
          }}
        />
      </div>
      <div className='cards'>
        {favourite?.map((song: any, i: number) => (
          <>
            <Card className='searchcard'>
              <img
                src={song.track.images?.coverart}
                alt=''
                className='cardimg'
              />

              <Card.Subtitle className='mb-2 text-muted'>
                {song.track.title}
              </Card.Subtitle>
            </Card>
          </>
        ))}
      </div>
      <div className='sectionlabels'>
        YOUR PLAYLISTS
        <div
          style={{
            flex: 1,
            height: '2px',
            margin: '10px',
            backgroundColor: '#818181',
          }}
        />
      </div>
      <div className='cards'>
        {playlists?.map((song: any, i: number) => (
          <Card className='searchcard'>
            <div>
              <img src={plimg} alt='' className='cardimg' />
            </div>

            <Card.Subtitle className='m-2 overflow-hidden text-muted'>
              {playlists}
            </Card.Subtitle>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Home
