import { HandIcon, StarIcon } from "lucide-react";

import BookCover from "@/components/book-cover";
import { Button } from "@/components/ui/button";

import { Book } from "../../../../types";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverUrl,
  coverColor,
}: Book) => {
  return (
    <section className="mt-10 flex flex-col items-center gap-10 rounded-xl bg-gradient-to-b from-palette-primary via-neutral-900 to-palette-secondary px-10 py-12 md:flex-row">
      <div className="relative flex flex-1 justify-center">
        <div className="relative h-[400px] w-[300px]">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={"#1c1f40"}
            coverUrl="https://m.media-amazon.com/images/I/81J6APjwxlL.jpg"
          />
          {/* <div className="absolute left-16 top-10 h-full w-full rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={"#1c1f40"}
              coverUrl="https://m.media-amazon.com/images/I/81J6APjwxlL.jpg"
            />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-white">
            By{" "}
            <span className="font-semibold text-palette-secondary">
              {author}
            </span>
          </p>
          <p className="text-white">
            Category{" "}
            <span className="font-semibold text-palette-secondary">
              {genre}
            </span>
          </p>
          <div className="flex flex-row items-center gap-1">
            <StarIcon className="size-5 text-yellow-500" />
            <p className="font-semibold text-palette-secondary">{rating}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-white">Total Books: {totalCopies}</p>
          <p className="text-white">
            Available Books: <span>{availableCopies}</span>
          </p>
        </div>
        <p className="text-sm text-neutral-200">{description}</p>
        <Button className="bg-white text-neutral-700">
          <HandIcon />
          Request to Borrow
        </Button>
      </div>
    </section>
  );
};

export default BookOverview;
