// 1) List the requirements, in this case you have a total of 4
// requirements
// a) Get data
// b) Choose an operator
// c) Get the result
// d) Reset the screen
// 2) Sketch the application, so that you are sure about the correct
// functioning.
// 3) You may use a flow diagram to help.
// 4) Use a tool of your choice, like Figma, to design the application.
// 5) Use the prototype ability and test it.
// Develop the application . Start from GIT ,it is good practice to do things
// in a standard way.
// - Create a repository
// - Clone the repository locally
// - Create a branch for each feature


let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('span');
let value = document.getElementById('value');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',function(){
        if(this.innerHTML === "="){
            value.innerHTML = eval(value.innerHTML);
        } else {
            if(this.innerHTML === 'Clear'){
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}