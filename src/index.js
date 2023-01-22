import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


export const AppContext = createContext()

const Main = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <React.StrictMode>
    <AppContext.Provider value={{openModal, setOpenModal}}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

