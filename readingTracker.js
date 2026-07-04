//GitHub link: https://github.com/gaberonincheese/cs81-module4a-reviewtracker

/**  
* This is an object called readingLog that contains three properties: day, book, and minutes. 
* Each property is an array that holds the corresponding values for each day of the week. 
*/
// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/** 
* This function takes three parameters in accordance with the readingLog object,
* then creates a new entry object with those parameters and pushes it to the readingLog array.
*/ 
// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}

/**
 * This function takes the given reading log.
 * It creates a variable called "total" to keep track of the total minutes read.
 * It then loops through each entry in the log, takes the "minutes" property from each entry, and adds it to the total variable.
 * Finally, it returns the total minutes read for the week.
 */
// Returns total minutes spent reading all week
function totalReadingMinutes(log) { // Function that takes the given reading log.
  let total = 0; // Variable that keeps track of total minutes read.
  for (let entry of log) { // For loop that creates a new entry for each item in log.
    total += entry.minutes; // Grabs property minutes from each entry and adds it to the total variable.
  }
  return total; // Returns total minutes.
}

/**
 * This function takes the given reading log, creates an object called bookCounts to keep track of how many times each book has been read, 
 * and loops through each entry in the log to populate the bookCounts object.
 * It then creates two variables, maxBook and maxCount, to keep track of the book that is mentioned the most in the log and the highest count of mentions for a book.
 * Finally, it loops through each book in the bookCounts object and updates maxBook and maxCount if the count for the current book is greater than maxCount, and returns maxBook.
 */
// Returns the book read most frequently
function mostReadBook(log) { // Function that takes the given reading log.
  // Makes an object called bookCounts that will keep track of how many times each book has been read.
  const bookCounts = {}; 
  // Loops through each entry in the log
  for (let entry of log) {
    // If the book isn't in bookCounts, add it with a count of 1. 
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
      // If ELSE (already in bookCounts) increment the count by 1.
    } else {
      bookCounts[entry.book]++;
    }
  }

  // Creates a string variable to keep track of the book that is mentioned the most in the log.
  let maxBook = null;
  // Creates a variable to keep track of the highest count of mentions for a book. 
  let maxCount = 0;
  // Loops through each book in the bookCounts object.
  for (let book in bookCounts) {
    // If the count for the current book is greater than the maxCount, update maxBook and maxCount.
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  // Returns the most read book.
  return maxBook;
}

/**
* This function takes the given reading log, then loops through each entry in the log.
* For each entry, it prints a formatted string that includes the day, minutes read, and book title.
*/ 
// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

//Test Case
readingLog.pop(); // Removes the last entry
readingLog.push("Saturday", "Lapvona", 45);
readingLog.push("Sunday", "Lapvona", 30);
printDailySummary(readingLog);

/*
* Suggestion for Improvement
* There were multiple instances where I felt that the names for the variables could have been more descriptive.
* The function mostReadBook was a struggle for me to parse for this reason. There was a lot of repetition of the word "book", which made the logic
* difficult to follow at times. As someone who was taught the importance of variable names, I likely would have renamed many of the variables
* to ensure each one's purpose was clearer.
*/