import { useEffect, useState } from 'react'
import bgimg from '../assets/bgimg2.png'
import './main.css'
import Card from 'react-bootstrap/Card'
import UserService from '../services/UserService'

const Favourite = () => {
  const [favourite, setFavourite] = useState([])

  useEffect(() => {
    const content = JSON.parse(localStorage.getItem('favourite') || '[]')
    {
      content ? setFavourite(content) : setFavourite([])
    }
  }, [])

  return (
    <>
      <div className='topimg' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='topcontent'>
          {UserService.getUsername()}'S FAVOURITE MUSIC
        </div>
      </div>
      <div className='sectionlabels'>
        YOUR FAVOURITES
        <div
          style={{
            flex: 1,
            height: '2px',
            margin: '10px',
            backgroundColor: '#818181',
          }}
        />
      </div>
      <div className='favouritecards'>
        {favourite?.map((song: any, i: number) => (
          <Card className='card'>
            <img src={song.track.images?.coverart} alt='' className='cardimg' />

            <Card.Subtitle className='mb-2 text-muted'>
              {song.track.title}
            </Card.Subtitle>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Favourite
