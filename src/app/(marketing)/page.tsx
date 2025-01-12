import { dummyBooks } from "@/constants/dummy-data";

import BookOverview from "./_components/book-overview";
import PopularBooks from "./_components/popular-books";

export default function Home() {
  return (
    <>
      <BookOverview {...dummyBooks[0]} />
      <PopularBooks title="Latest Books" books={dummyBooks} className="py-16" />
    </>
  );
}
