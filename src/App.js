import React,{Fragment} from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movie from './components/Movie/Movie';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
