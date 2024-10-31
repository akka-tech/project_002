
const today = new Date();
const dayIndex = today.getDate();
const monthIndex = today.getMonth()
const yearIndex = today.getFullYear()



const  culcule=()=> {
    const day=document.querySelector('.day_input').value 
    const month=document.querySelector('.month_input').value
    const year=document.querySelector('.year_input').value
    
    let yearOut= yearIndex-year
    let monthOut= monthIndex-month+1
    let dayOut= dayIndex-day

    let plusy=0
    let plusm=0
    if(monthOut<0){
        plusy=1
        monthOut=monthIndex
    }

    if(dayOut<0){
        plusm=1
        dayOut=dayIndex
    }
    document.getElementById('yearOut').innerHTML= yearOut-plusy;
    document.getElementById('dayOut').innerHTML= dayOut;
    document.getElementById('monthOut').innerHTML= monthOut-plusm;
    
}
