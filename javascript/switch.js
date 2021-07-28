const express = 'world1'
switch (express) {
    case 'hello':
        console.log('1')
        break
    case 'world':
        console.log('2')
        break
    default:
        console.log('default, world1')
        break
    case 'javascript':
        console.log('3')
        break
}

const express1 = 'banana'
switch (express1) {
    case 'a':
    case 'b':
    case 'banana':
        console.log('yes')
        break
    case 'k':
        console.log('k')
        break
    default:
        console.log('default express1')
}
var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

// ECMASCRIPT 2015 -> ES6
// const action = 'say_hello';
// switch (action) {
//   case 'say_hello':
//     let message = 'hello';
//            console.log('0 ~5');
//            break;
//   case 'say_hi':
//     let message = 'hi';
//     case 6: console.log('6');
//     break;
//   default:
//     console.log('Empty action received.');
//     break;
// }

// SyntaxError: Identifier 'message' has already been declared

const action1 = 'say yes'
switch (action1) {
    case 'say yes':
        {
            let message1 = 'yes1'
            console.log(message1)
            break
        }
    case 'say no': {
        let message1 = 'no'
        console.log(message1)
        break
    }
    default:
        console.log('over')
}