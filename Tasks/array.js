//Execution

//checkUserStatus();
//fooBarBaz();
//printTable(6);

//Task #1
var users = {
  'awais': {
    status: 'completing task'
  },
  'shahzad': {
    status: 'busy!'
  },
  'adeel': {
    status: 'working'
  },
  'taha': {
    status: 'eating'
  }
};
function checkUserStatus() {
  var userName = prompt('Enter username','e.g: awais');
  var matchFalse = 'result not found!';
  userName = users[userName] ? (users[userName].status) : matchFalse;
  console.log(userName);
}


//Task #2
//if divisible by 3 foo, 5 bar, none of these baz
function fooBarBaz() {

  var i;
  for(i = 1; i <= 20; i++) {
    if(i % 3 == 0) {
      console.log(i, 'foo');
    }
    if(i % 5 == 0) {
      console.log(i, 'bar');
    }
    if(i % 3 != 0 && i % 5 != 0) {
      console.log(i, 'baz');
    }
  }

}

//Task #3
//print table of n
function printTable(n) {

  for(i = 1; i <= 10; i++) {
      console.log(n + ' * ' + i + ' = ' + i * n);
  }

}


