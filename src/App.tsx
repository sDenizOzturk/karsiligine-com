import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  setColor1,
  setColor2,
  setColor3,
  setColor4,
  setColor5,
} from 'binak-react-components';

setColor1(236, 240, 241);
setColor2(44, 62, 80);
setColor3(189, 195, 199);
setColor4(241, 196, 15);
setColor5(192, 57, 43);

import RootView from './views/Root';
import ErrorView from './views/NotFound';
import IndexView from './views/Index';
import LatestView from './views/Latest';
import ContributeView from './views/Contribute';

import routes from './utils/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    errorElement: <ErrorView />,
    id: 'root',
    children: [
      {
        path: routes.index,
        element: <IndexView />,
      },
      {
        path: routes.latest,
        element: <LatestView />,
      },
      {
        path: routes.contribute,
        element: <ContributeView />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
