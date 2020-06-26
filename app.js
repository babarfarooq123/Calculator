function clickBtn(strRecieve){
    valuee = document.getElementById("textView");
    valuee.value += strRecieve;
}

function clearr(){
    valuee = document.getElementById("textView");
    valuee.value = '';
}

function result(){
    valuee = document.getElementById("textView");
    valuee.value = eval(valuee.value);
}