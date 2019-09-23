function printbigger(arr,y){
   for(var i=0; i<arr.length; i++){
       if(arr[i]>y){
           console.log(arr[i]);
       }
   }
}
//printbigger([8,3,5,7,1,2,4,0,55,213,23,12],5);

function print_max_min_avg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
   for(var i=0; i<arr.length; i++){
       if(arr[i]>max){
           max = arr[i];
       }
       if(arr[i]<min){
           min = arr[i];
       }
       sum+=arr[i];
   }
   console.log("max:",max);
   console.log("min:",min);
   console.log("avg:",sum/arr.length);
}
//print_max_min_avg([8,3,5,7,1,2,4,0,55,213,23,12])

function replaceNegatives(arr){
   for(var i=0; i<arr.length; i++){
       if(arr[i]<0){
           arr[i] = "Dojo";
       }
   }
}
/*var arr = [1,2,-3,-5,5];
replaceNegatives(arr);
console.log(arr);*/

function removeVals(arr,x,y){
    var new_arr = [];
    for(var i=0; i<x; i++){
        new_arr.push(arr[i]);
    }
    for(var a=y+1; a<arr.length; a++){
        new_arr.push(arr[i]);
    }
    return new_arr;
}
//console.log(removeVals([20,30,40,50,60,70],2,4));
