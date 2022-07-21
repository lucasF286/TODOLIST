const container = document.querySelector('.container');
const input = document.querySelector('.input');
const error = document.querySelector('.erro');
const buttonToAdd = document.querySelector('.botao_adc');
const activityList = document.querySelector('.lista_atividades');
const buttonDelAll = document.querySelector('.botao_del_todos');
const paleta1 = document.querySelector('#paleta1');
const paleta2 = document.querySelector('#paleta2');
const paleta3 = document.querySelector('#paleta3');

buttonToAdd.addEventListener('click', ()=> checkActivity());
window.addEventListener('keypress', (e)=> { if(e.key == 'Enter'){checkActivity()}});
buttonDelAll.addEventListener('click', ()=> { cleanAll() });
paleta1.addEventListener('click', ()=> {changeColor('seagreen')});
paleta2.addEventListener('click', ()=> {changeColor('slateblue')});
paleta3.addEventListener('click', ()=> {changeColor('tomato')});

function checkActivity(){
    if(input.value.length > 3){
        error.style.display = 'none';
        registerActivity();
        cleanInput();
    }else{
        error.style.display = 'grid';
        error.innerHTML = `${input.value} not a valid activity`;
        cleanInput();
    }
}

function changeColor(color){
    container.style.backgroundColor = color;
    activityList.style.backgroundColor = color;
}

function registerActivity(){
    const activity = document.createElement('div');
    const activityName = document.createElement('p');
    const buttonDel = document.createElement('button');
    activityName.textContent = input.value;
    activity.classList.add('atividade');
    buttonDel.classList.add('botao_del');
    buttonDel.textContent = 'Clean';
    buttonDel.addEventListener('click', () => { cleanActivity(activity) });
    activityList.appendChild(activity);
    activity.appendChild(activityName);
    activity.appendChild(buttonDel);
}

function cleanActivity(activity){
    activityList.removeChild(activity);
}

function cleanAll(){
    while(activityList.firstElementChild){
        activityList.removeChild(activityList.firstElementChild);
    }
}

function cleanInput(){
    input.value = '';
}