/*Exercises: Objects
The Reading List
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string),
 author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like
so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not.
If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not,
log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string),
servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number),
 and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes.
 Stars: Puff, Jackie, Living Sneezes."
Maybe the join method will be helpful here */

const books = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien' ,
    alreadyRead: true
  },
  {
    title: 'Harry porter',
    author: 'J.K.Rowling' ,
    alreadyRead: true
  },
  {
    title: 'The jungle book',
    author: 'Rudyard Kipling' ,
    alreadyRead: false
  },
  {
    title: 'The three mistakes of my life',
    author: 'chetan bagat' ,
    alreadyRead: false
  }
];

const details = (book) => {
  for(let i=0; i<book.length; i++)
  {
    if(book[i].alreadyRead)
    {
    console.log(`I have already read ${book[i].title} by ${book[i].author}`);
  }
}
}

details(books);
