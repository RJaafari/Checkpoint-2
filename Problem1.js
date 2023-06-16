var list1 = [3,1,7,9]
var list2 = [2,4,1,9,3]
var somme = 0
for(i=0;i<list1.length;i++){
    var bool=false
    for(j=0;j<list2.length;j++){
        if (list1[i]==list2[j]){
            var bool=true
            break
    }}
    console.log(bool)
    if(bool==false){
        somme=somme +list1[i]
    }
    console.log(somme)
}
for(i=0;i<list2.length;i++){
    var bool=false
    for(j=0;j<list1.length;j++){
        if (list1[i]==list2[j]){
            var bool=true
            break
    }}
    console.log(bool)
    if(bool==false){
        somme=somme +list2[i]
    }
    console.log(somme)
}