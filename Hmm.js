function chuyentien() {
    let number = Number(document.getElementById("gt1").value);
    let a = Number(document.getElementById("select1").value);
    let b = Number(document.getElementById("select2").value);
    let vnd = number * 23000;
    let usd = number/23000;
    if (a === b) {
        alert("Chon lai!");
    }
    if (a === 1 && b === 23000) {
        document.getElementById("result").innerHTML="Result: "+vnd;

    }
    if (a === 23000 && b === 1){
        document.getElementById("result").innerHTML="Result: "+usd;
    }

}
