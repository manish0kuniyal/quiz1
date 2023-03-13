const questions=[
    {
     question:"2+2?"
      ,answers:[
        { answer1:3,isit:false},
        {answer2:4,isit:true}  ]
},

{question:"1+1?",
 answers:[
    {answer1:1,isit:false},
    {answer2:2,isit:true} ]
},

{question:"2/0?",
 answers:[
    {answer1:'notdefined',isit:true},
    {answer2:3,isit:false}  ]
},


{question:"10*10?",
 answers:[
    {answer1:100,isit:true},
    {answer2:0,isit:false}  ]
},

{question:"110-1?",
 answers:[
    {answer1:109,isit:false},
    {answer2:111,isit:true}  ]
}

]


let btn1=document.getElementById('opt1')
let btn2=document.getElementById('opt2')
let btnre=document.getElementById('reload')
let ques=document.getElementById('question')

let k=Math.round(Math.random()*5)
let question=document.getElementById('question')
question.innerHTML=ShowQuestion()


function ShowQuestion(){
  ques.innerHTML=questions[k].question
  btn1.innerHTML=questions[k].answers[0].answer1
  btn2.innerHTML=questions[k].answers[1].answer2
  btn1.addEventListener('click',()=>{
   if(questions[k].answers[0].isit==true)
   {btn1.style.background="green"
    btn2.style.background='red'
      }
      else{
        btn1.style.background="red"
    btn2.style.background='green'
      }
  })
  btn2.addEventListener('click',()=>{
    if(questions[k].answers[1].isit==true)
    {btn1.style.background="red"
     btn2.style.background='green'
       }
       else{
        btn1.style.background="green"
    btn2.style.background='red'
      }
    
   })
}
btnre.addEventListener('click',Reload)

function Reload(){
    window.location.reload()
    
let k=Math.round(Math.random()*5)
}
ShowQuestion()