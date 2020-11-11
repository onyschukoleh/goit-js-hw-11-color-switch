
const colors = 
[
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

  const refs = 
{
    startBtn : document.querySelector (".start"),
    stopBtn : document.querySelector (".stop")  
}

const hendelStop = () => 
{
    refs.stopBtn.setAttribute ("disabled",true)
    refs.startBtn.removeAttribute ("disabled") 
}

refs.stopBtn.addEventListener ('click', hendelStop)

const hendeldStart = () => 
{
    colorSwich ()  
};

refs.startBtn.addEventListener ('click', hendeldStart);

function colorSwich () 
{
    const id = setInterval(()=>
    {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)]
    },1000)
    
    refs.stopBtn.addEventListener('click',()=>{clearInterval(id)})
    refs.startBtn.setAttribute ("disabled",true)
    refs.stopBtn.removeAttribute ("disabled")
};

const randomIntegerFromInterval = (min, max) => 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

