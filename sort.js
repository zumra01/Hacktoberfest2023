//// sort an array in descending order


var arr1 = [100, 400, 2, 20, 21];
var temp = 0;
for (var i = 0; i <= arr1.length - 1; i++) {
    for (var j = i + 1; j <= arr1.length - 1; j++) {
        if (arr1[i] < arr1[j]) {
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }

    }
}
console.log(arr1);
