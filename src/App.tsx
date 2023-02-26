import MainPage from './components/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css'
import Welcome from './components/Welcome'
import RenderOnAnonymous from './components/RenderOnAnonymous'
import RenderOnAuthenticated from './components/RenderOnAuthenticated'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RenderOnAnonymous>
          <Welcome />
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
          <MainPage />
        </RenderOnAuthenticated>
      </BrowserRouter>
    </div>
  )
}

export default App
