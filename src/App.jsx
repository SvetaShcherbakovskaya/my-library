import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LibraryStats from './components/LibraryStats.jsx';
import BookList from './components/BookList.jsx';
import { books } from './data/books.js';
import './App.css';

const genres = [
  'Художественная литература',
  'Учебная литература',
  'Детская литература',
  'Публицистика',
  'Научно-популярная литература',
];

export default function App() {
  return (
    <div className="page" id="top">
      <Header />
      <main>
        <LibraryStats books={books} />
        <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
          <div className="section-heading"><h2 id="catalog-title">Полный каталог</h2><span>Все истории в одном месте</span></div>
          <BookList books={books} />
        </section>
        {genres.map((genre, index) => (
          <section className="catalog-section" key={genre} aria-labelledby={`genre-${index}`}>
            <div className="section-heading"><h2 id={`genre-${index}`}>{genre}</h2></div>
            <BookList books={books} genre={genre} />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
