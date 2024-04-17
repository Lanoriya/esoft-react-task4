import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'

const basename = '/esoft-react-task4/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename={basename}>
    <App />
  </Router>,
)
