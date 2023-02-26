import React, { useEffect, useState } from 'react'
import bgimg from '../assets/bgimg2.png'
import plimg from '../assets/playlist.jpeg'
import './main.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

type InputEvent = React.ChangeEvent<HTMLInputElement>

const Playlist = () => {
  const [playlists, setPlaylists] = useState([''])
  const [show, setShow] = useState(false)
  const [playlistName, setPlaylistName] = useState('')

  useEffect(() => {
    const content = JSON.parse(localStorage.getItem('playlist') || '[]')
    {
      content ? setPlaylists(content) : console.log('first')
    }
    console.log(playlists)
  }, [])

  const createPlaylist = () => {
    playlists.push(playlistName)
    localStorage.setItem('playlist', JSON.stringify(playlists))
    setShow(false)
  }

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>CREATE PLAYLIST</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='searchbar'>
            <Form.Group
              className='searchgroup'
              controlId='exampleForm.ControlInput1'
            >
              <Form.Control
                type='create'
                placeholder='Enter playlist name...'
                className='inputfield'
                style={{ marginLeft: '-150px', marginTop: '-40px' }}
                value={playlistName}
                onChange={(e: InputEvent) => setPlaylistName(e.target.value)}
                autoComplete='on'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={createPlaylist}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='topimg' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='topcontent'>
          <Button
            variant='dark'
            size='lg'
            style={{ alignItems: 'center', justifyItems: 'center' }}
            onClick={() => setShow(true)}
          >
            Create Playlist
          </Button>
        </div>
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
      <div className='favouritecards'>
        {playlists?.map((song: any, i: number) => (
          <Card className='searchcard'>
            <img src={plimg} alt='' className='cardimg' />

            <Card.Subtitle className='mb-2 text-muted'>{song}</Card.Subtitle>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Playlist
