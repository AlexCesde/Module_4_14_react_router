import './App.css';
import ComponentCustom from './Components/ComponentCustom';

import Default from './Default';
import Error from './Error';

// Routing
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <header >
        <h1>Styled component</h1>
      </header>
      <main>
        <h2 id='supertitle'>Main content</h2>
        <p className='regular'>Information</p>
        <Routes>
          <Route index element={<Default />} />
          <Route exact path="/custom/:title" element={<ComponentCustom title="title" />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
