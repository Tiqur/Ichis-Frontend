import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" />
        <Route exact path="/profile" />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
