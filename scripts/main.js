
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    getInputValue();
    removeInput();
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

async function fetchMOTD() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        createText(`"${data.content}" — ${data.author}`);
    } catch (error) {
        createText("There are no new messages, commander.");
    }
}

async function open_terminal(){
  createText("Welcome");
  await delay(300);
  createText("Starting the server...");
  await delay(300);
  fetchMOTD();
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about", "Who am I and what do I do.");
  createCode("projects", "My github page with my projects.");
  createCode("socials", "All my social networks.");
  createCode("clear", "Clear the terminal.");
  createCode("help", "See this screen");

  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");

  p.setAttribute("class", "path")
  p.textContent = "sass";

  span1.textContent = " in";
  span2.textContent = " ~";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);

  app.scrollTop = app.scrollHeight
  input.focus();
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("about", "Who am I and what do I do.");
    createCode("projects", "My github page with my projects.");
    createCode("socials", "All my social networks.");
    createCode("clear", "Clear the terminal.");
    createCode("help", "See this screen");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/skhtor' target='_blank'><i class='fab fa-github white'></i> github.com/skhtor</a>")
  }
  else if(value === "about"){
    trueValue(value);
    createText("Hey! My name is Sassoon (Sass for short)")
    createText("I am a DevOps/Platform Engineer based in Melbourne.")
    createText("Technologies I've been working with recently: <span class='blue'>AWS, Kubernetes, Terraform, ArgoCD</span>.")
  }
  else if(value === "socials"){
    trueValue(value);
    createText("<a href='https://github.com/skhtor' target='_blank'><i class='fab fa-github white'></i> github.com/skhtor</a>")
    createText("<a href='https://www.linkedin.com/in/sass-k/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/sass-k</a>")
    createText("<a href='https://www.instagram.com/zazzun/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/zazzun</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === ""){
    return
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
