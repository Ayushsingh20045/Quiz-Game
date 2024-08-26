const questions=[{
    'que':'Which of these is a markup language',
    'a':'c++',
    'b':'javascript',
    'c':'css',
    'd':'HTML',
    'correct':'d'
},
{
'que':'What does "HTTP" stand for?',
'a':'Hyper Text Transfer Protocol',
'b':' High Transfer Text Protocol',
'c':'Hyper Text Transmission Protocol',
'd':'Hyperlink Text Transfer Protocol',
'correct':'a'
},
{
    'que':'Which programming language is primarily used for web development?',
    'a':'java',
    'b':'python',
    'c':'javacsript',
    'd':'c++',
    'correct':'c'
},
{
    'que':'Which of the following is a popular cloud storage service?',
    'a':'dropbox',
    'b':'photoshop',
    'c':'outlook',
    'd':'onenote',
    'correct':'a'
}
]

let index=0;
let total=questions.length;
let correct=0,
    wrong=0;

const quesbox=document.getElementById("quebox")
const optioninputs=document.querySelectorAll(".option");
const loadquestion=()=>{
    reset();
    if(index===total){
        return endquiz();
    }
    else{

    }
const data=questions[index];
quesbox.innerText=` ${index+1}.) ${data.que}`;
optioninputs[0].nextElementSibling.innerText=data.a;
optioninputs[1].nextElementSibling.innerText=data.b;
optioninputs[2].nextElementSibling.innerText=data.c;
optioninputs[3].nextElementSibling.innerText=data.d;

}

const submitquiz=()=>{
    const data=questions[index];
    const ans=getanswer()
    if(ans===data.correct){
        correct++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getanswer=()=>{
    let answer;
    optioninputs.forEach((input)=>{
       if(input.checked){
       answer= input.value;
       }
      
    })
    return answer;
}

const reset=()=>{
    optioninputs.forEach((input)=>{
        input.checked=false;
    })
}
const endquiz=()=>{

document.getElementById("box").innerHTML=`<h3>Thankyou for playing the quiz</h3>
<h2>${correct}/${total} are correct</h2>
`;

}

//initial call
loadquestion()
