import React, { useEffect, useState } from 'react'
import bgimg from '../assets/bgimg2.png'
import './main.css'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import searchicon from '../assets/search.svg'
import hearticon from '../assets/heart-fill.svg'
import { useGetSongsBySearchQuery } from '../redux/services/shazam'
import Spinner from 'react-bootstrap/Spinner'

type InputEvent = React.ChangeEvent<HTMLInputElement>
type Props = {}

declare var process: {
  env: {
    REACT_APP_SHAZAM_API_KEY: string
  }
}

const Search = (props: Props) => {
  const [importeddata, setImportedData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [hint, setHint] = useState<any>([])
  const [suggestion, setSuggestion] = useState<any>([])
  const [value, setValue] = useState([])
  const [history, setHistory] = useState([])
  const { data, isFetching } = useGetSongsBySearchQuery(searchTerm)

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem('history') || '[]'))
    const content = value
    {
      content ? setHistory(content) : console.log('first')
    }
    const loadHints = async () => {
      {
        searchTerm
          ? await fetch(
              `https://shazam.p.rapidapi.com/auto-complete?term=${searchTerm}`,
              {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Key': process.env.REACT_APP_SHAZAM_API_KEY,
                  'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
                },
              }
            )
              .then((res) => res.json())
              .then((response) => {
                setHint(response.hints)
              })
          : console.log('nothing entered')
      }
    }
    loadHints()
  }, [searchTerm])

  const showResult = () => {
    {
      {
        searchTerm.length > 0 && !isFetching
          ? setImportedData(data.tracks.hits)
          : console.log('loading')
      }
    }

    const newitem = importeddata

    localStorage.setItem('history', JSON.stringify(newitem))
  }

  const handleFavourite = (song: any) => {
    const arr: any[] = []
    arr.push(song)
    const content = JSON.parse(localStorage.getItem('favourite') || '[]')
    const newitem = arr.concat(content)
    console.log(newitem)

    localStorage.setItem('favourite', JSON.stringify(newitem))
  }

  const onChangeHandler = (text: string) => {
    setSearchTerm(text)
    setSuggestion(hint)
  }
  const suggestHandler = (text: string) => {
    setSearchTerm(text)
    setSuggestion([])
  }

  return (
    <>
      <div className='topimg' style={{ backgroundImage: `url(${bgimg})` }}>
        <Form className='searchbar'>
          <Form.Group
            className='searchgroup'
            controlId='exampleForm.ControlInput1'
          >
            <div style={{ width: '50vw' }}>
              <Form.Control
                type='search'
                placeholder='search for songs or artist...'
                className='inputfield'
                value={searchTerm}
                onChange={(e: InputEvent) => onChangeHandler(e.target.value)}
              />
              {suggestion &&
                suggestion.map((suggestion: any, i: number) => (
                  <div
                    className='suggestions'
                    key={i}
                    onClick={() => suggestHandler(suggestion.term)}
                  >
                    {suggestion.term}
                  </div>
                ))}
            </div>

            <img
              src={searchicon}
              alt='searchicon'
              className='searchicons'
              onClick={showResult}
            />
          </Form.Group>
        </Form>
      </div>
      <div className='sectionlabels'>
        RESULTS
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
        {data ? (
          importeddata?.map((song: any, i: number) => (
            <>
              <Card className='searchcard'>
                <img
                  src={song.track.images?.coverart}
                  alt=''
                  className='cardimg'
                />
                <div
                  style={{
                    marginTop: '-100px',
                    marginBottom: '60px',
                    opacity: '1',
                    position: 'relative',
                  }}
                >
                  <img
                    src={hearticon}
                    alt=''
                    style={{
                      width: '40px',
                      height: '40px',
                      margin: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      handleFavourite(song)
                    }}
                  />
                </div>

                <Card.Subtitle className='mb-2 text-muted'>
                  {song.track.title}
                </Card.Subtitle>
              </Card>
            </>
          ))
        ) : isFetching ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyItems: 'center',
              width: '100vw',
              marginLeft: '40vw',
            }}
          >
            <Spinner animation='grow' role='status'></Spinner>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyItems: 'center',
              width: '100vw',
              marginLeft: '20vw',
            }}
          >
            {' '}
            SEARCH SOMETHING TO SHOW RESULTS
          </div>
        )}
      </div>
      <div className='sectionlabels'>
        PREVIOUSLY SEARCHED{' '}
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
        {history
          .slice(0)
          .reverse()
          ?.map(
            (song: any, i: number) =>
              i < 5 && (
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
              )
          )}
      </div>
    </>
  )
}

export default Search
