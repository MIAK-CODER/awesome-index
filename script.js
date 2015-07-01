var _ = require('lodash');

var programmers =[
{
name: 'Trinity',
occupation: 'programmer',
awesomeIndex: 10
},
{
name: 'Mater',
occupation: 'tow truck'
},
{
name: 'Number 5',
occupation: 'programmer',
awesomeIndex: 7
},
{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
},
{
name: 'Bob Parr',
occupation: 'programmer',
awesomeIndex: 6
}
];

function avgAwesomeIndex() {
  var awesomeList = _.pluck(programmers, 'awesomeIndex');
  var i = 0, sum = 0, len = awesomeList.length;

  //use lodash filter function instead of doing isNaN

  _.filter(awesomeList, function(n) {
    if (isNaN(n) === false) {
      sum += awesomeList[n];
    }
  })

  //_.forEach(awesomeList, function(){
  //  if (isNaN(awesomeList[i]) === false) {
  //    sum += awesomeList[i];
  //  }
  //  i++;
  //});

  console.log(sum/len);

  //return sum/len;
}


//$(function() {
//  $('#awesome-index').html(mean());
//})
