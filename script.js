
var testArr = [6,3,5,1,2,4]

var sum = 0;
function predictOne(arr){
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(arr[i], sum);
    }
}

predictOne(testArr);

//----------------------------------

var sum2 = 0;
var newArr = [];
function predictTwo(arr){
    for (var i = 0; i < arr.length; i++) {
        sum2 = arr[i] * i;
        newArr.push(sum2);
    }
    console.log(newArr);
}

predictTwo(testArr);