// ParseCSV script to parse CSV file contents
// Retrieved from: http://stackoverflow.com/questions/1293147/javascript-code-to-parse-csv-data

function parseCSV(str) {
    var arr = [];
    var quote = false;  // true means we're inside a quoted field

    // iterate over each character, keep track of current row and column (of the returned array)
    for (var row = col = c = 0; c < str.length; c++) {
        var cc = str[c], nc = str[c+1];        // current character, next character
        arr[row] = arr[row] || [];             // create a new row if necessary
        arr[row][col] = arr[row][col] || '';   // create a new column (start with empty string) if necessary

        // If the current character is a quotation mark, and we're inside a
        // quoted field, and the next character is also a quotation mark,
        // add a quotation mark to the current column and skip the next character
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }

        // If it's just one quotation mark, begin/end quoted field
        if (cc == '"') { quote = !quote; continue; }

        // If it's a comma and we're not in a quoted field, move on to the next column
        if (cc == ',' && !quote) { ++col; continue; }

        // If it's a newline and we're not in a quoted field, move on to the next
        // row and move to column 0 of that new row
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }

        // Otherwise, append the current character to the current column
        arr[row][col] += cc;
    }
    return arr;
}

// Convert CSV to JSON
// By me, Jpoechill :)
function convertToJSON(CSV) {
  // capture both arays
  var arr1 = CSV[0];
  var arr2 = CSV[1];

  // create new object
  var newObj = {};

  // map first array object names with second array object items
  for (var i=0; i < arr1.length; i ++) {
    // check if new object name exists
    var thisObjectTitle = arr1[i].split("/")[0];

    // add to existing property if already exists
    // otherwise create new property
    if (newObj.hasOwnProperty(thisObjectTitle)) {
      newObj[thisObjectTitle].push(arr2[i]);
    } else {
      newObj[thisObjectTitle] = [arr2[i]];
    }
  }

  // complete
  return [newObj];
}
