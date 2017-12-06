var list = ['jane', 'john', 'josh', 'jeff']

var fibonacci = function(n) {
    if (n == 0) {return 0;}
    if (n == 1) {return 1;}
    if (n > 1) {return n + fibonacci(n - 1);}
};

var gcd = function(a, b) {
    if (a == b) {return a;}
    if (a > b) {gcd(b,a - b);}
    if (b > a) {gcd(a,b - a);}
}

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
