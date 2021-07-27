import React, { useEffect } from 'react';
import './style/common.scss';
import './style/mobile.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import penderMiddleware from 'redux-pender';
import base from './store/base';

import { dispatch } from 'use-bus';

import Header from './component/Header';
import Footer from './component/Footer';
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
import ProjectRegi from './page/ProjectRegistration/ProjectRegi.jsx';
import CompetitionRegi from './page/ProjectRegistration/CompetitionRegi/CompetitionRegi.jsx';
import VidCreatorRegi from './page/ProjectRegistration/VidCreatorRegi/VidCreatorRegi.jsx';
import IRRegi from './page/ProjectRegistration/IRRegi/IRRegi.jsx';
import ProjectDetail from './page/ProjectDetail/ProjectDetail';
import ErrorPage from './page/ErrorPage/ErrorPage.jsx';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const Middlewares = [penderMiddleware()];
const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const store = createStore(
	base,
	composeEnhancers(applyMiddleware(...Middlewares)),
);

function App() {
	const history = useHistory();
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
		script.async = true;
		document.body.appendChild(script);
		// const script3 = document.createElement('script');
		// script3.src =
		// 	'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js';
		// script3.async = true;

		// const script4 = document.createElement('script');
		// script4.src =
		// 	'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js';
		// script4.async = true;

		// const link1 = document.createElement('link');
		// link1.href =
		// 	'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css';
		// link1.rel = 'stylesheet';
		// link1.async = true;

		// const link2 = document.createElement('link');
		// link2.href =
		// 	'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css';
		// link2.rel = 'stylesheet';
		// link2.async = true;
		// document.body.appendChild(script3);
		// document.body.appendChild(script4);
		// document.body.appendChild(link1);
		// document.body.appendChild(link2);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (
		<BrowserRouter>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Provider store={store}>
					<div className={'app'} onClick={() => dispatch('@@popup/close')}>
						<Header></Header>
						<Route exact path="/" component={Main} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/tutorial" component={Tutorial} />
						<Route
							exact
							path="/tutorial/detail/:id"
							component={TutorialDetail}
						/>
						<Route exact path="/price" component={Price} />
						<Route exact path="/price/detail/:id" component={PriceDetail} />
						<Route exact path="/post/select" component={SnsSelect} />
						<Route
							exact
							path="/post/select/channel_add"
							component={ChannelAdd}
						/>
						<Route exact path="/post/post" component={VideoPost} />
						<Route
							exact
							path="/creatormarket"
							render={(props) => <CreatorMarket history={history} {...props} />}
						/>
						<Route
							exact
							path="/prjregi"
							render={() => <ProjectRegi history={history} />}
						/>
						<Route
							exact
							path="/mywork"
							render={(props) => <MyWork history={history} {...props} />}
						/>
						<Route
							exact
							path="/workdetail"
							render={(props) => (
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
							render={(props) => (
								<VidCreatorRegi history={history} {...props} />
							)}
						/>
						<Route
							exact
							path="/videditor"
							render={(props) => (
								<VidCreatorRegi history={history} {...props} />
							)}
						/>
						<Route
							exact
							path="/ir"
							render={() => <IRRegi history={history} />}
						/>
						<Route
							exact
							path="/prjdetail/:challengeIdx"
							render={(props) => <ProjectDetail history={history} {...props} />}
						/>
						<Route excat path="/errorpage" component={ErrorPage} />
						<Footer></Footer>
					</div>
				</Provider>
			</MuiPickersUtilsProvider>
		</BrowserRouter>
	);
}

export default App;
