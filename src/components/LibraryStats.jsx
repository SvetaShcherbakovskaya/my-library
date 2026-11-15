export default function LibraryStats({ books }) {
  const availableBooks = books.filter((book) => book.copies > 0);

  return (
    <section className="stats" aria-label="Статистика библиотеки">
      <p>Всего книг в каталоге: <strong>{books.length}</strong></p>
      <p>Доступны для выдачи: <strong>{availableBooks.length}</strong></p>
    </section>
  );
}
