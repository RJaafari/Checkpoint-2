function dot_product(v1,v2){
var ps=0
    for(i=0;i<v1.length;i++){
        ps = ps + v1[i]*v2[i]
    }
    console.log(ps)
    if(ps==0){
        console.log("the two vectors are othogonal")
    }
}
dot_product([-3,3,0],[3,3,4])
