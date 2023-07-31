import './App.css'
import Header from './components/Header/Header'
import AppRoutes from './routes/AppRoutes'

function App () {
  return (
    <div className='principal'>
      <Header />
      {/* nav, no cambia */}
      <AppRoutes />
      {/* footer, no cmbia */}
    </div>
  )
}

export default App
