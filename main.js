// get the element title
let title = document.querySelector('.title');


// declared the varible of turn
let turn = "X";

function end(num1,num2,num3){

    title.innerHTML= ` the winner is:${boxes[num2]}`;
    document.getElementById('item'+num1).style.background="#000";
    document.getElementById('item'+num2).style.background="#000";
    document.getElementById('item'+num3).style.background="#000";
    setInterval(()=>{
      title.innerHTML+='.'

    },1000);

    setTimeout(()=>{
       location.reload();
    },4000)
 }
 let boxes = [];
// function winner
 function winner(){

  for( let i = 1 ; i < 10 ; i++){

    boxes[i]=document.getElementById("item"+i).innerHTML;
   }

if(boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[3] != ''){
 end(1,2,3)
}

if(boxes[4]==boxes[5] && boxes[5]==boxes[6] && boxes[6]!=""){
    end(4,5,6)
}

if(boxes[7]==boxes[8] && boxes[8]==boxes[9] && boxes[9]!=""){
    end(7,8,9)
}

if(boxes[1]==boxes[4] && boxes[4]==boxes[7] && boxes[7]!=""){
    end(1,4,7)
}
if(boxes[2]==boxes[5] && boxes[5]==boxes[8] && boxes[8]!=""){
    end(2,5,8)
}
   
if(boxes[3]==boxes[6] && boxes[6]==boxes[9] && boxes[9]!=""){
    end(3,6,9)
}
if(boxes[1]==boxes[5] && boxes[5]==boxes[9] && boxes[9]!=""){
    end(1,5,9)
}
if(boxes[3]===boxes[5] && boxes[5]===boxes[7] && boxes[3]!==""){
    end(3,5,7)
}
}

// function of event click at boxes
function clikced(idd){
let box = document.getElementById(idd);
 
if( turn == "X" && box.innerHTML== ""){
    console.log('fraes')
    box.innerHTML=turn;
    turn = "O";
    title.innerHTML=" is turn of O"
    
}else if( turn =="O" && box.innerHTML==""){
    box.innerHTML=turn;
    turn="X";
    title.innerHTML=" is turn of X";
    
}
 
    winner()


}

