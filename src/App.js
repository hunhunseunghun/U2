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
import MyWork from './Page/MyWork/MyWork.jsx';
import SetTaskCondition from './Page/ProjectRegistration/SetTaskCondition/SetTaskCondition.jsx';
import WorkDetail from './Page/WorkDetail/WorkDetail';
import CompetitionRegi from './Page/ProjectRegistration/CompetitionRegi/CompetitionRegi.jsx';
import VidCreatorRegi from './Page/ProjectRegistration/VidCreatorRegi/VidCreatorRegi.jsx';
import VidEditorRegi from './Page/ProjectRegistration/VidEditorRegi/VidEditorRegi.jsx';
import IRRegi from './Page/ProjectRegistration/IRRegi/IRRegi.jsx';
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
          <Route
            exact
            path="/creatormarket"
            render={() => <CreatorMarket history={history} />}
          />
          <Route
            exact
            path="/prjregi"
            render={() => <ProjectRegi history={history} />}
          />
          <Route
            exact
            path="/setTc"
            render={() => <SetTaskCondition history={history} />}
          />
          <Route
            exact
            path="/mywork"
            render={props => <MyWork history={history} {...props} />}
          />
          <Route
            exact
            path="/workdetail"
            render={props => (
              <WorkDetail history={history} {...props}></WorkDetail>
            )}
          />
          <Route
            exact
            path="/competiton"
            render={() => <CompetitionRegi history={history} />}
          />
          <Route
            exact
            path="/vidcreator"
            render={() => <VidCreatorRegi history={history} />}
          />
          <Route
            exact
            path="/videditor"
            render={() => <VidEditorRegi history={history} />}
          />
          <Route exact path="/ir" render={() => <IRRegi history={history} />} />
          <Footer></Footer>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
