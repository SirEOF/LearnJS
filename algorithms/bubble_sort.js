/* Implementation of bubble sort in javascript */

var arr = [ 1, 0 , 9 ,5 , 4 , 7 , 20 , 3];
console.log("Orignal Array: " ,arr);

// Self calling function for bubble sort
(function(){
    let temp;
    for(let i = 0 ; i < arr.length -1 ; i++){
        for(let j = 0 ; j < arr.length -1 ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
})();

console.log("Sorted Array: ", arr);