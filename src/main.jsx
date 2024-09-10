import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationStack from './navigations/navigation-stack.jsx';
import { BrowserRouter } from 'react-router-dom';
import UseMemo from './components/hooks/useMemo/useMemo.jsx';
import UseMemoEx2 from './components/hooks/useMemo/useMemoEx.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <BrowserRouter>
   
<UseMemoEx2/>
</BrowserRouter>
  </React.StrictMode>,
)
