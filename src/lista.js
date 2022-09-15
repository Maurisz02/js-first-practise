
let list = [];

export function hozzaad(num){
    if(num<0){
        //alert("A megadott szám kisebb mint nulla");
        console.log("A megadott szám kisebb mint nulla");
    }else{
        list.push(num);
    }
}

export function atlag(){
    let atlag = 0;
    for(let i = 0; i< list.length;i++){
        atlag += list[i];
    }
    return atlag/list.length;
}