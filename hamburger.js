document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classlist.toggle('.sidebargo');
    if(document.querySelector('.sidebar').classlist.contains('.sidebargo')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        document.querySelector('.cross').style.display = 'inline';
    }
})