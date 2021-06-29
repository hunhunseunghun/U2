import logo from './logo.svg';
import './style/common.scss';
import './style/mobile.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, HashRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import penderMiddleware from 'redux-pender';
import base from './store/base';

import { dispatch } from 'use-bus';

import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './page/Main';
import Login from './page/Login';
import Tutorial from './page/Tutorial';
import TutorialDetail from './page/TutorialDetail';
import Price from './page/price/Price';
import PriceDetail from './page/price/PriceDetail';
import SnsSelect from './page/post/SnsSelect';
import ChannelAdd from './page/post/ChannelAdd';
import VideoPost from './page/post/VideoPost';
import CreatorMarket from './page/CreatorMarket/CreatorMarket';
import MyWork from './page/MyWork/MyWork.jsx';
import WorkDetail from './page/WorkDetail/WorkDetail.jsx';
const Middlewares = [penderMiddleware()];
const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const store = createStore(
  base,
  composeEnhancers(applyMiddleware(...Middlewares))
);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={'app'} onClick={() => dispatch('@@popup/close')}>
          <Header></Header>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/tutorial/detail/:id" component={TutorialDetail} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/price/detail/:id" component={PriceDetail} />
          <Route exact path="/post/select" component={SnsSelect} />
          <Route exact path="/post/select/channel_add" component={ChannelAdd} />
          <Route exact path="/post/post" component={VideoPost} />
          <Route exact path="/creatormarket" component={CreatorMarket} />
          <Route exact path="/mywork" component={MyWork} />
          <Route exact path="/workdetail" component={WorkDetail} />
          <Footer></Footer>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
