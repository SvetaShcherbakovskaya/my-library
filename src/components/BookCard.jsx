import Card from './Card.jsx';
import AvailabilityBadge from './AvailabilityBadge.jsx';

export default function BookCard({ book }) {
  return (
    <Card>
      <div className="card-top"><span className="book-year">{book.year}</span><AvailabilityBadge copies={book.copies} /></div>
      <p className="book-genre">{book.genre}</p>
      <h3>{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <div className="card-bottom">
        <p>Доступных экземпляров: <strong>{book.copies}</strong></p>
        {book.year < 2000 && <span className="classic">Классическое издание</span>}
      </div>
    </Card>
  );
}
