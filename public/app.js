var questions=[{
    "question":"Android is Developed By",
    "option1": "Microsoft",
    "option2":"Apple",
    "option3":"Google",
    "option4":"Android Inc",
    "answer":"4"
},
{
    "question":"Android Web Browser Is Based On",
    "option1": "Chrome",
    "option2":"Open-source",
    "option3":"Safari",
    "option4":"Firefox",
    "answer":"2"
},
{
    "question":"Which Media Format Is Not Supported By Android",
    "option1": "MP4",
    "option2":"AVI",
    "option3":"MIDI",
    "option4":"MPEG",
    "answer":"2"
},
{
    "question":"In Which XML Layout Files Are Stored",
    "option1": "/assets",
    "option2":"/src",
    "option3":"/res/value",
    "option4":"/res/layout",
    "answer":"4"
},
{
    "question":"Which Code Used By Android Is Not A Open Source",
    "option1": "Video Driver",
    "option2":"WiFi Driver",
    "option3":"Device Driver",
    "option4":"Bluetooth Driver",
    "answer":"2"
},
{
    "question":"How Many Level Of Securities Are In Android",
    "option1": "Android Level Security",
    "option2":"App And Kernel Level Security",
    "option3":"Java Level Security",
    "option4":"None Of The Above",
    "answer":"2"
},
{
    "question":"Which Of The Following Does Not Belong To Transitions",
    "option1": "ViewFlipper",
    "option2":"ViewAnimator",
    "option3":"ViewSwitcher",
    "option4":"ViewSlider",
    "answer":"4"
},
{
    "question":"What are The Functionalities In AsyncTask In Android?",
    "option1": "OnPreExecution()",
    "option2":"OnPostExecution()",
    "option3":"DoInBackground()",
    "option4":"OnProgressUpdate()",
    "answer":"2"
},
{
    "question":"What Does AAPT Stands For? ",
    "option1": "Android Asset Processing Tool.",
    "option2":"Android Asset Providing Tool.",
    "option3":"Android Asset Packaging Tool.",
    "option4":" Android Asset Packaging Technique ",
    "answer":"3"
},
{
    "question":"Android is Based On Which Kernal",
    "option1": "Linux",
    "option2":"Windows",
    "option3":"Mac",
    "option4":"Redhat",
    "answer":"1"
},

]



var currentQuestion=0;
var score=0;
var totQuestions = questions.length;

var container=document.getElementById("quizContainer");
var questionEl=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nextButton=document.getElementById("nextButton");
var resultCont=document.getElementById("result");

function loadQuestion (questionIndex){
    var q =questions[questionIndex];
    questionEl.textContent=[questionIndex+1]+ " . " + q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;
};

function loadNextQuestion(){
    var selectedOption=document.querySelector('input[type=radio]:checked');

    if (!selectedOption) {
        alert("Please Select your Answered!")
        return;
    }
    var answer=selectedOption.value;
    if (questions[currentQuestion].answer==answer) {
        score+=10;
    }
    selectedOption.checked=false;
    currentQuestion++;
    if (currentQuestion==totQuestions+1) {
        nextButton.textContent="Finish"
    }
  if (currentQuestion==totQuestions) {
    container.style.display='none';
    resultCont.style.display='';
    resultCont.textContent="Your Score: " + score + " " +" Time: "+minutes+":"+seconds+"s";
    return;
}
loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion)



let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000)
  
