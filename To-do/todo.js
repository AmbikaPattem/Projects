let editvalue;
function add(){
    if(editvalue){
        editvalue.textContent=document.getElementById("data").value;
        editvalue=null;
        document.getElementById("data").value="";
        return;
    }
    let text=document.getElementById("data");
    let task=text.value;
    //console.log(task);
    //dynamically create a div and then pass task data as an element through createTextNode 
    let newtask=document.createElement("div");
    newtask.className="li";
    let newinput=document.createTextNode(task);
    newtask.appendChild(newinput);
    if(task==='')
    {
    alert("enter a task");
    }
    else{
        document.getElementById("ul").appendChild(newtask);
    }
    document.getElementById("data").value="";
    //dynamically create a edit button
    let edit=document.createElement("button");
    let editdata=document.createTextNode("Edit")
    edit.appendChild(editdata);
    newtask.appendChild(edit);
    edit.className="modify";
    edit.onclick=function(e){
        console.log(e);
        editvalue=e.target.parentNode.childNodes[0];
        document.getElementById("data").value=e.target.parentNode.childNodes[0].data;
        document.getElementById("data").focus();
    }
    //dynamically create a X symbol for each div
    let span=document.createElement("button");
    let del=document.createTextNode("\u00D7");
    span.className="close";
    //below function is used to remove the tasks
    span.onclick=function(){
        this.parentElement.remove();
    }
    span.appendChild(del);
    newtask.appendChild(span);
}