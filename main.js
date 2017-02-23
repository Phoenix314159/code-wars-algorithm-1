function largestOfFour(arr) {

 return arr.map(function(a){
    return a.sort(function(b,c){
      return b-c;
    });

    }).map(function(d){

      return d[3];
   }); }
