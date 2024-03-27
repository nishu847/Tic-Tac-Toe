let button=document.querySelectorAll('.btn');
let reset=document.querySelector('.reset');
let newbtn=document.querySelector('.newgame');
let winner=document.querySelector('.winner');
let last=document.querySelector('.last');
let turno= true; // for turn of O player
let array=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
reset.addEventListener("click",()=>{
    turno=true;
    for(let btn of button)
    {
        btn.disabled=false;
        btn.innerText="";
    }
    winner.classList.add("hide");
})
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      if(turno===true)
      {
        btn.innerText="O";
        turno=false;
        
      }
      else{
        btn.innerText="X";
        turno=true;
      }
      btn.disabled=true; // to disable the button if clicked again
      checkwinner();
    })
})
const checkwinner=()=>{
    for(let pattern of array)
    {
       let pos1= button[pattern[0]].innerText;
       let pos2= button[pattern[1]].innerText;
       let pos3= button[pattern[2]].innerText;
       if(pos1!="" && pos2!="" && pos3!="")
       {
            if(pos1===pos2 && pos2===pos3)
            {
                for(let btn of button)
                {
                    btn.disabled=true;
                }
                last.classList.remove("hide");
                last.style.height="100vmin";
               winner.classList.remove("hide");            
                winner.innerText=`CONGRATULATIONS! WINNER IS PLAYER ${pos1}`;
                newbtn.classList.remove("hide");
            }
       }
    }
}
newbtn.addEventListener("click",()=>{
    turno=true;
    for(let btn of button)
    {
        btn.disabled=false;
        btn.innerText="";
    }
    newbtn.classList.add("hide");
    last.style.height="0vmin";
    winner.classList.add("hide");
    last.classList.add("hide");
})
