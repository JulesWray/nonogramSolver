// Use this function to return the value of any input - just use the id / name / class you want to reference as a parameter i.e. getValue('#nonogramRows'):
function getValue (classOrID) {
  var val = document.querySelector(classOrID).value;
  return val;
}

// validates form and checks how many time the form has been submitted.
var submitCounter = 1;
let validated = false;
function check () {
  if (!getValue('#nonogramRows') || !getValue('#nonogramColumns') || !getValue('#numBlockRow') || !getValue('#numBlockColumn') && submitCounter !== 2) {
    alert('Please fill all inputs!');
    validated = false;
    return false;
  } else if (submitCounter !== 2) {
    submitCounter++;
    validated = true;
    return false;
  } else {
    validated = false;
    return true
  }
}

// Triggers on a validated submit to get form data. Puts data in the rowsColumnsNumsBlocks array, and outputs it legibly in a new div for the user
let rowsColumnsNumsBlocks = [];
document.getElementById('form').addEventListener(
  'submit',
  function () {
    if (validated == true) {
      rowsColumnsNumsBlocks = [];
      rowsColumnsNumsBlocks.push(getValue('#nonogramRows'));
      rowsColumnsNumsBlocks.push(getValue('#nonogramColumns'));
      rowsColumnsNumsBlocks.push(getValue('#numBlockRow'));
      rowsColumnsNumsBlocks.push(getValue('#numBlockColumn'));
      console.log(rowsColumnsNumsBlocks);
      
      let explainText = 'Here is the top outside of the Nonogram with ' + rowsColumnsNumsBlocks[1] + ' columns of up to ' + rowsColumnsNumsBlocks[3] + ' blocks, and the left outside of the Nonogram with ' + rowsColumnsNumsBlocks[0] + ' rows of up to ' + rowsColumnsNumsBlocks[2] + ' blocks:';
      const newDiv = document.createElement("div");
      const info = document.createTextNode(explainText);
      newDiv.appendChild(info);
      form.appendChild(newDiv);
      const br = document.createElement('br');
      form.appendChild(br);
      newInputs();
    }
  }
)

//This function creates grids of inputs for the user to input block lengths, using the data from the rowsColumnsNumsBlocks array. It produces 4 types of input boxes - 'first', which is the first block of the row, to give it indentation; 'newInput', which is filler without special characteristics; 'fiveRow/Row', which occurs every 5 rows/columns to give some order; and 'brInput', which is the bottom row of each grid and creates a space below. 
var numCol = 0;
var numRow = 0;
function newInputs () {
  for (i=0; i<2; i++) {
    if (i == 0) {
      for (y=0; y<rowsColumnsNumsBlocks[3]; y++) {
        if (y !== rowsColumnsNumsBlocks[3]-1) {
          for (z=0; z<rowsColumnsNumsBlocks[1]; z++) {
            if (z === 0) {
              const first = document.createElement('input');
              first.type = 'number';
              first.className = 'first';
              first.id = numCol;
              first.value = numCol;
              numCol++;
              first.style.marginLeft = rowsColumnsNumsBlocks[2]*3+'em';
              formal.appendChild(first);            
            } else if (z !== rowsColumnsNumsBlocks[1]-1 && (z + 1) % 5 === 0) {
              const fiveCol = document.createElement('input');
              fiveCol.type = 'number';
              fiveCol.className = 'fiveCol';
              fiveCol.id = numCol;
              fiveCol.value = numCol;
              numCol++;
              formal.appendChild(fiveCol);
            } else if (z !== rowsColumnsNumsBlocks[1]-1) {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              newInput.id = numCol;
              newInput.value = numCol;
              numCol++;
              formal.appendChild(newInput);
            } else {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              newInput.id = numCol;
              newInput.value = numCol;
              numCol++;
              formal.appendChild(newInput);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);            
            }
          }
        } else {
          for (b=0; b<rowsColumnsNumsBlocks[1]; b++) {
            if (b === 0) {
              const first = document.createElement('input');
              first.type = 'number';
              first.className = 'first';
              first.style.marginLeft = rowsColumnsNumsBlocks[2]*3+'em';
              first.id = numCol;
              first.value = numCol;
              numCol++;
              formal.appendChild(first);
            } else if (b !== rowsColumnsNumsBlocks[1]-1 && (b + 1) % 5 === 0) {
              const fiveCol = document.createElement('input');
              fiveCol.type = 'number';
              fiveCol.className = 'fiveCol';
              fiveCol.id = numCol;
              fiveCol.value = numCol;
              numCol++;
              formal.appendChild(fiveCol);            
            } else if (b !== rowsColumnsNumsBlocks[1]-1) {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              brInput.id = numCol;
              brInput.value = numCol;
              numCol++;
              formal.appendChild(brInput);            
            } else {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              formal.appendChild(brInput);
              brInput.id = numCol;
              brInput.value = numCol;
              numCol++;
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
            }
          }
        }
      }
    } else {
      for (j=0; j<rowsColumnsNumsBlocks[0]; j++) {
        if (j !== rowsColumnsNumsBlocks[0]-1 && (j + 1) % 5 === 0) {
          for (x=0; x<rowsColumnsNumsBlocks[2]; x++) {
            if (x !== rowsColumnsNumsBlocks[2]-1) {
              const fiveRow = document.createElement('input');
              fiveRow.type = 'number';
              fiveRow.className = 'fiveRow';
              formal.appendChild(fiveRow);
            } else {
              const fiveRow = document.createElement('input');
              fiveRow.type = 'number';
              fiveRow.className = 'fiveRow';
              formal.appendChild(fiveRow);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
            }
          }
        } else if (j !== rowsColumnsNumsBlocks[0]-1) {
          for (x=0; x<rowsColumnsNumsBlocks[2]; x++) {
            if (x !== rowsColumnsNumsBlocks[2]-1) {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              formal.appendChild(newInput);
            } else {
              const newInput = document.createElement('input');
              newInput.type = 'number';
              newInput.className = 'newInput';
              formal.appendChild(newInput);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
            }
          }
        } else {
          for (a=0; a<rowsColumnsNumsBlocks[2]; a++) {
              if (a !== rowsColumnsNumsBlocks[2]-1) {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              formal.appendChild(brInput);
            } else {
              const brInput = document.createElement('input');
              brInput.type = 'number';
              brInput.className = 'brInput';
              formal.appendChild(brInput);
              const newBr = document.createElement('br');
              formal.appendChild(newBr);
              const submit = document.createElement('input');
              submit.type = 'submit';
              submit.className = 'submitInput';
              submit.value = 'Submit - only press this once you have finished filling out the inputs completely!';
              formal.appendChild(submit);
            }
          }
        }
      }
    }
  }
}

// We're now calling the generated columns and generated rows 1 and 2 (in the order they appear), in order to keep things simple.
// This function formats the data received from the dynamically generate form (so it can be used in an algorithm to complete the nonogram), and stops the page from reloading. No validation required. It calls the algorithm function at its end. It takes in an array of length maxblocknum*numofrows/columns and formats it into arrays of maxblocknum inside another array, and then gets rid of any 0s.
// Called on the dynamically generated submit being pressed.

// For 1 - get all of the inputs into one array. Then get them into a 2d array with the inner arrays being maxblocknum length, with data (inc 0) inside. Then loop through each of the inner arrays using numberofcolumns, and take out the 0s without affecting order.
function format () {
  
}