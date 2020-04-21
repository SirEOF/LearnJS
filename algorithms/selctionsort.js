/* Implementation of selection sort in javascript*/

var arr = [7,8,10,2,4,13,15,6];
console.log("Original array: ",arr);


// Self calling selection sort function
(function (){
    
    for(let i = 0 ; i < arr.length ; i++){
        
        var temp , minIndex = i ;

        for(let j = i + 1 ; j < arr.length ; j++){

            if(arr[j] < arr[minIndex]) minIndex = j;
        }

        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

    }
})();

console.log("Sorted Array : " , arr);