
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './RouteConfig';
import { Provider } from 'react-redux';
import Store from './store/store';


function App() {



  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </>
  )
}

export default App;
