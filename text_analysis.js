let btn=document.querySelector("button");
// console.log(btn);

let text=document.querySelector("textarea");
// console.log(text);

let characters=document.querySelectorAll('p')[1];
// console.log(characters);

let words=document.querySelectorAll('p')[2];
// console.log(word);

let sentences=document.querySelectorAll('p')[3];
// console.log(sentence);

btn.addEventListener("click",e=>{

    e.preventDefault();

    const first=text.value.split("");
    // console.log(first);
    const second = text.value.split(" ");
    // console.log(second);
    const third= text.value.split(".");
    // console.log(third);
    
    characters.textContent=first.length;
    words.textContent=second.length;
    sentences.textContent=third.length-1;


});
let header=document.querySelector("header");
// console.log(header);
let first=document.querySelector(".first-article");
// console.log(first);
let form=document.forms[0];
// console.log(form);
let footer=document.querySelector("footer");
// console.log(footer);


let moon=document.querySelectorAll('p')[0];
// console.log(moon);

let shield=document.querySelector(".color-shield");
// console.log(shield);
 let value=true;
shield.addEventListener("click",e=>{
         
            if(value==true){
                header.style.backgroundColor="dimgray";
                first.style.backgroundColor="darkgrey";
                form.style.backgroundColor="darkslateblue";
                text.style.backgroundColor="darkslateblue";
                btn.style.backgroundColor="darkcyan";
                footer.style.backgroundColor="darkgrey";
                moon.textContent="🔆";
                value=false;
            }
            else{
                header.style.backgroundColor="lightgoldenrodyellow";
                first.style.backgroundColor="lightgoldenrodyellow";
                form.style.backgroundColor="lightgoldenrodyellow";
                text.style.backgroundColor="lightyellow";
                btn.style.backgroundColor="lightyellow";
                footer.style.backgroundColor="lightyellow";
                moon.textContent="🌙";
                value=true;
                
            }
           
        
});

 
