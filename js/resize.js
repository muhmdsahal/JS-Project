reSize = () =>{
    if(document.getElementById('widthinpx').value){
        document.getElementById('img').style.width = document.getElementById('widthinpx').value;
    }else  {
        document.getElementById('img').style.width = document.getElementById('widthin%').value;
    }
}
    reSize2 = () =>{
        if(document.getElementById('heightinpx').value){
            document.getElementById('img').style.height = document.getElementById('heightinpx').value;
        }
        else {
            document.getElementById('img').style.height = document.getElementById('heightin%').value;
        }

    }
openLink = () =>{
    if(document.getElementById('checkbox').checked){
        window.open(document.getElementById('link').value,"_blank")
    }else{
        location.href = document.getElementById('link').value
    }
  
}
