import { useState } from 'react'
import './main.css'
import Home from './Home'
import Search from './Search'
import Favourite from './Favourite'
import Playlist from './Playlist'

function MainPage() {
  const [page, setPage] = useState(1)
  const handleHome = () => {
    setPage(1)
  }
  const handleSearch = () => {
    setPage(2)
  }
  const handleFavourite = () => {
    setPage(3)
  }
  const handlePlaylist = () => {
    setPage(4)
  }

  return (
    <>
      <div className='sidenav'>
        <button className='home button' onClick={handleHome}>
          <svg width='24px' height='24px' viewBox='0 0 24 24'>
            <path
              d='M2 8l9.732-4.866a.6.6 0 01.536 0L22 8M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8'
              stroke-width='3'
              fill='none'
            />
          </svg>
          <span> Home</span>
        </button>
        <button className='search button' onClick={handleSearch}>
          <svg width='24px' height='24px' viewBox='0 0 24 24'>
            <path
              d='M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z'
              stroke-width='3'
              fill='none'
            />
          </svg>
          <span> Search</span>
        </button>
        <button className='favorite button' onClick={handleFavourite}>
          <svg width='24px' height='24px' viewBox='0 0 24 24'>
            <path
              d='M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z'
              stroke-width='3'
              fill='none'
            />
          </svg>
          <span> Favourites</span>
        </button>
        <button className='playlist button' onClick={handlePlaylist}>
          <svg width='24px' height='24px' viewBox='0 0 24 24'>
            <path
              d='M20 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 0v-7.9a.6.6 0 01.6-.6H22'
              stroke-width='3'
              fill='none'
            />
            <path d='M2 11h14M2 17h11M2 5h18' stroke-width='3' fill='none' />
          </svg>
          <span> Playlist</span>
        </button>
      </div>
      <div className='main'>
        {
          {
            1: <Home />,
            2: <Search />,
            3: <Favourite />,
            4: <Playlist />,
          }[page]
        }
      </div>
    </>
  )
}

export default MainPage
