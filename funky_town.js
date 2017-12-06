var list = ['jane', 'john', 'josh', 'jeff']

var fibonacci = function(n) {
    if (n == 0) {return 0;}
    if (n == 1) {return 1;}
    if (n > 1) {return n + fibonacci(n - 1);}
};

var randomList = function(n, list){
return list[n];
};

var randomNumber = function(len){
return Math.floor(Math.random() * len);
};

var randomStudent = function(){
var n = randomNumber(list.length);
return randomList(n, list);
};
