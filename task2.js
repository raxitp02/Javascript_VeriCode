function permutation(input) {
  var data = input.slice();
  var permutations = [];
  var n = data.length;

  if (n === 0) {
    return [
      []
    ];
  } else {
    var num1 = data.shift();
    var words = permutation(data);
    words.forEach(function(word) {
      for (var i = 0; i < n; ++i) {
        var tmp = word.slice();
        tmp.splice(i, 0, num1)
        permutations.push(tmp);
      }
    });
  }
  return permutations;
}

var string = 'RAXIT';
var chars = string.split('');
var result = permutation(chars).map(function(p) {
  return p.join('');
});

document.write(result);
console.log(result);

