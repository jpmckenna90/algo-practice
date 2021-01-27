// Given a chocolate bar, two children, Lily and Ron, are determining how to share it. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.

// Consider the chocolate bar as an array of squares, s = [2, 2, 1, 3, 2]. She wants to find segments summing
// to Ron's birth day,  d = 4, with a length equalling his birth month, m = 2.
// In this case, there are two segments meeting her criteria: [2, 2] and [1, 3] .

// birthday has the following parameter(s):

// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month

function birthday(s, d, m) {
  //    variable to hold total number of combinations, will be our return value
  let total = 0;

  // loop through the array of integers
  s.forEach((item, index) => {
    // counter to hold the running sum of segment pieces
    let counter = 0;
    // "break off" a segment of chocolate, starting at
    // current iteration and ending at defined "month"
    let segment = s.slice(index, index + m);
    //    loop through that segment and add the values
    segment.forEach((number) => {
      counter += number;
    });
    // if those values match the birth "day", add them to the total
    if (counter === d) {
      total++;
    }
  });

  return total;
}
