import logo from './logo.svg';
import './style/common.scss';
import './style/mobile.scss';
import { BrowserRouter } from 'react-router-dom';
import {Route,HashRouter} from 'react-router-dom';
import { dispatch } from 'use-bus'

import Header from './component/Header';
import Footer from './component/Footer';
import Tutorial from './page/Tutorial';
import TutorialDetail from './page/TutorialDetail';
function App() {
  return (
      <BrowserRouter>
            <div className={'app'} onClick={() => dispatch('@@popup/close')}>
                <Header></Header>
                <Route exact path="/" component={Tutorial} />
                <Route exact path="/tutorial/detail/:id" component={TutorialDetail} />
                <Footer></Footer>
            </div>
      </BrowserRouter>
  );
}

export default App;
