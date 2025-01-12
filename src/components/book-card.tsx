import Link from "next/link";

import { cn } from "@/lib/utils";

import { Book } from "../../types";
import BookCover from "./book-cover";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = true,
}: Book) => {
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`/book/details/${id}`}
        className={cn(
          isLoanedBook &&
            "xs:w-52 flex h-64 w-full flex-col items-center justify-between"
        )}
      >
        <BookCover coverColor={coverColor} coverUrl={coverUrl} />
      </Link>
      <div className="flex flex-col gap-y-2">
        <span>{title}</span>
        <p className="text-sm text-muted-foreground">{genre}</p>
      </div>
    </div>
  );
};

export default BookCard;
