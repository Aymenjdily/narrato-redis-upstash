import BookCard from "@/components/book-card";

import { Book } from "../../../../types";

type PopularBooks = {
  title: string;
  books: Book[];
  className: string;
};

const PopularBooks = ({ title, books, className }: PopularBooks) => {
  return (
    <section className={className}>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl">{title}</h2>
        <div className="h-1 w-24 rounded-xl bg-palette-primary dark:bg-palette-secondary" />
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
