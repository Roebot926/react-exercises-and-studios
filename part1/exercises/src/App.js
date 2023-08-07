import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';
import BookList from './components/BookList.js';
import HobbyLinks from './components/HobbyLinks';

function App() {
  return (
    <div className="similarComponents">
      <ChoresList />
      <HobbyLinks/>
      <MovieList />
      <BookList />
    </div>
  );
}

export default App;
