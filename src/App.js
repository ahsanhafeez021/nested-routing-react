import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dasboard';
import Login from './components/login';
import ComOne from './components/comOne';
import ComTwo from './components/comTow';
import ComThree from './components/comThree';
// import DashOne from './components/dashOne';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/dashboard" component={Dashboard} />
				{/* <Route exact path="/dashboard" component={DashOne} /> */}
				<Route exact path="/c1" component={ComOne} />
				<Route exact path="/c2" component={ComTwo} />
				<Route exact path="/c3" component={ComThree} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
