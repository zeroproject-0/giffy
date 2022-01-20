import '@/App.css';
import { Link, Route } from 'wouter';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import SearchResults from '@/pages/SearchResults';
import StaticContext from '@/context/StaticContext';
import { GifsContextProvider } from '@/context/GifsContext';

function App() {
	return (
		<StaticContext.Provider value={{ name: 'probando' }}>
			<div className="App">
				<section className="App-header">
					<Link to="/">GIFFY</Link>
					<GifsContextProvider>
						<Route path="/" component={Home} />
						<Route path="/search/:keyword" component={SearchResults} />
						<Route path="/gif/:id" component={Detail} />
						<Route path="/404" component={() => <h1>404 Error </h1>} />
					</GifsContextProvider>
				</section>
			</div>
		</StaticContext.Provider>
	);
}

export default App;
