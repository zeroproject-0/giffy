import './App.css';
import { Link, Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';

function App() {
	return (
		<div className="App">
			<section className="App-header">
				<Link to="/">GIFFY</Link>
				<Route path="/" component={Home} />
				<Route path="/search/:keyword" component={SearchResults} />
				<Route path="/gif/:id" component={Detail} />
			</section>
		</div>
	);
}

export default App;
