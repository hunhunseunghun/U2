import logo from './logo.svg';
import './style/common.scss';
import './style/mobile.scss';
import { BrowserRouter } from 'react-router-dom';
import {Route,HashRouter} from 'react-router-dom';
import { dispatch } from 'use-bus'

import Header from './component/Header';
import Footer from './component/Footer';
import Main from './page/Main';
import Tutorial from './page/Tutorial';
import TutorialDetail from './page/TutorialDetail';
import Price from './page/price/Price';
import PriceDetail from './page/price/PriceDetail';
import SnsSelect from './page/post/SnsSelect';
import ChannelAdd from './page/post/ChannelAdd';
import VideoPost from "./page/post/VideoPost";
function App() {
  return (
      <BrowserRouter>
            <div className={'app'} onClick={() => dispatch('@@popup/close')}>
                <Header></Header>
                <Route exact path="/" component={Main} />
                <Route exact path="/tutorial" component={Tutorial} />
                <Route exact path="/tutorial/detail/:id" component={TutorialDetail} />
                <Route exact path="/price" component={Price} />
                <Route exact path="/price/detail/:id" component={PriceDetail} />
                <Route exact path="/post/select" component={SnsSelect} />
                <Route exact path="/post/select/channel_add" component={ChannelAdd} />
                <Route exact path="/post/post" component={VideoPost} />
                <Footer></Footer>
            </div>
      </BrowserRouter>
  );
}

export default App;
