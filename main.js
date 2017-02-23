function people(arrN){
  var arr2=[];
  for(var i=0; i<arrN.length; i++){

     if(arrN[i][0] >= 55 && arrN[i][1] >7){

       arr2.push("Senior");
     }else{

       arr2.push("Open");
     }
 }
 return arr2; //return arr2
 }
