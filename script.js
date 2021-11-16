var login = document.getElementById("login");
var addDefButton = document.getElementById("addDefinition")
var cntLikeDef1=13;
var cntLikeDef2=37;







function toggleLogin(){
console.log("clicked login button");
    login.innerText="logout";
}

function addDefinition(){
    addDefButton.remove();
}

function msgLikeNinja(){
    alert("Nija was liked");
}

function liked(element){

    if(element.id=="def1")
    {
        cntLikeDef1++;
        element.innerText = cntLikeDef1+" likes";
    }
    else if(element.id=="def2"){
        cntLikeDef2++;
        element.innerText = cntLikeDef2+" likes";
    }
 setTimeout(msgLikeNinja,100);
        

}