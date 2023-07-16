const getTheTitles = function(books) {
    let result = [];
    for(book of books){
      result.push(book.title);
    }
    return result;

// Do not edit below this line
module.exports = getTheTitles;
