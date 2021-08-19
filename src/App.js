import React, { useState, useEffect } from 'react';
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

import ReactNotification, { store } from 'react-notifications-component';
import './style/notification.css';
import axios from 'axios';

const Middlewares = [penderMiddleware()];
const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const storeredux = createStore(
	base,
	composeEnhancers(applyMiddleware(...Middlewares)),
);

function App() {
	const history = useHistory();

	const [notifications, setNotifications] = useState(new Set());
	const handleNotification = (datas) => {
		var unreads = datas.filter((notification) => notification.read === 0);
		unreads.forEach((unread) => {
			if (!notifications.has(unread.notifyIdx)) {
				setNotifications(new Set(notifications.add(unread.notifyIdx)));
				store.addNotification({
					id: unread.notifyIdx,
					title: 'U2 알림',
					message: unread.body,
					type: 'info',
					insert: 'top',
					container: 'bottom-left',
					animationIn: ['animate__animated', 'animate__fadeIn'],
					animationOut: ['animate__animated', 'animate__fadeOut'],
					dismiss: {
						duration: 0,
						onScreen: true,
					},
					onRemoval: () => {
						var config = {
							method: 'put',
							url:
								process.env.REACT_APP_U2_DB_HOST +
								`/Campaign/notification/${unread.notifyIdx}?read=1`,
							headers: {
								Authorization: 'Bearer ' + localStorage.getItem('token'),
								'Content-Type': 'application/json',
							},
						};
						axios(config).then((response) => {
							let copySet = new Set(notifications);
							copySet.delete(unread.notifyIdx);
							setNotifications(copySet);
						});
					},
				});
			}
		});
	};
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (
		<BrowserRouter>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Provider store={storeredux}>
					<div className={'app'} onClick={() => dispatch('@@popup/close')}>
						<ReactNotification
							isMobile={true}
							breakpoint={768}
						></ReactNotification>
						<Header handleNotification={handleNotification}></Header>
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
