function findMinAndRemove(array){
let smallestEl = []
for(let i = 0; i < array.length; i++){
  if(array[i] < i){
    smallestEl.push(array[i])
  }
  
}
return smallestEl
}

function selectionSort(array){

}
