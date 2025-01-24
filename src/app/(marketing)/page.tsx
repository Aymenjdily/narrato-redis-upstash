import { dummyBooks } from "@/constants/dummy-data";
import { db } from "@/database/drizzle";
import { usersTable } from "@/database/schema";

import BookOverview from "./_components/book-overview";
import PopularBooks from "./_components/popular-books";

export default async function Home() {
  const results = await db.select().from(usersTable);

  console.log(JSON.stringify(results, null, 2));

  return (
    <>
      <BookOverview {...dummyBooks[0]} />
      <PopularBooks title="Latest Books" books={dummyBooks} className="py-16" />
    </>
  );
}
