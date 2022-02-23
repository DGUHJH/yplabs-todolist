import Main from 'pages/Main';
import Todo from 'pages/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/todo/:id" element={<Todo />} />
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
export default App;
