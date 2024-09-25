import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextWrapper from './components/Provider'
import IsLogin from './components/IsLogin';
createRoot(document.getElementById('root')).render(
    <ContextWrapper>
      <IsLogin>
        <App />
      </IsLogin>
    </ContextWrapper>
)
