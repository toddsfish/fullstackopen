import ReactDOM from 'react-dom/client'

// App component is exported as default export from App.jsx
import App from './App'


// renders its contents into the div-element, defined in the file index.html, having the id value 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)