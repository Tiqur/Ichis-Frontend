import './index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './components/Layout';
import Dashboard from './pages/DashboardPage/DashboardPage';


function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter> 
    </Layout>
 );
}

export default App;
