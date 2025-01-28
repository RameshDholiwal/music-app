import { Outlet } from 'react-router-dom'
import Sidebar from './compnents/sidebar/Sidebar'

function App() {

  return (
    <>
      <div className="main-container">
        <Sidebar />
        <div className="pages-container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
