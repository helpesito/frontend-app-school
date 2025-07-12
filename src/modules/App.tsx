import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './auth/components/LoginPage'
import { RecuperatePage } from './auth/components/RecuperatePage'
import { Dashboard } from './dashboard/components/Dashboard'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/recuperate' element={<RecuperatePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}
