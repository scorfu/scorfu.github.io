function hide(id){
   console.info("hide:" + id);
   document.getElementById(id).style.display = "none";
}

function hideAllPages() {
    hide('home')
    hide("skills")
    hide("projects")
    hide("languages")
}

function showHome(){
    hideAllPages();
    document.getElementById('home').style.display = '';  
}

function showSkills(){
    hideAllPages();
    document.getElementById('skills').style.display = "";  
}

 function showProjects(){
    hideAllPages();
    document.getElementById('projects').style.display = "";
}
function showLanguages(){
    hideAllPages();
    // document.getElementById('home').style.display = 'none';
    // document.getElementById("skills").style.display = "none";
    // document.getElementById("projects").style.display = "none";
    document.getElementById('languages').style.display = "";
}