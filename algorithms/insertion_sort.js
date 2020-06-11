/*Implementation of insertion sort in javascript*/

var arr = [10 , 20 , 5, 4, 5 , 9 , 26 , 0];
console.log("Original Array: ", arr);

// Self calling function for insertion sort
(function(){
    for(let i = 1; i < arr.length ; i++){
        let hole = i;
        let value = arr[i];

        while(hole > 0 && arr[hole-1] > value){
            arr[hole] = arr[hole-1]
            hole--;
        }
        arr[hole] = value;
    }
})();

console.log("Sorted Array:" , arr);