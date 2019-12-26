// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, 
// which should be separated by an ampersand.

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''

// My Solution:

function list(names){
  if(names.length === 0) {
    return ''
  }else if(names.length === 1) {
    return names[0].name
  } else {
  let listNames = []
    for(i=0; i<(names.length - 1); i++) {
    listNames.push(`${names[i].name}`)
    }
    return `${listNames.join(', ')} & ${names[(names.length - 1)].name}`
  }
 }