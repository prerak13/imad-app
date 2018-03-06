console.log('Loaded!');
var button=document.getElementById('counter');
var count=0;
button.onclick=function(){
    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE){
           if(request.status==200){
               var count=request.responseText;
               
                document.getElementById('showThis').innerHTML=count.toString();
                console.log(count.toString());
           } 
        }
    };
    
    request.open('GET','http://choksiprerak.imad.hasura-app.io/count',true);
    
    
    
};