function hide(id){
   console.info("hide:" + id);
   document.getElementById(id).style.display = "none";
}

function showHome(){
    hide("skills")
    hide("projects")
    hide("languages")
    document.getElementById('home').style.display = '';  
}

function showSkills(){
    hide("home")
    hide("projects")
    hide("languages")
    document.getElementById('skills').style.display = "";  
}

 function showProjects(){
    hide("home")
    hide("skills")
    hide("languages")
    document.getElementById('projects').style.display = "";
}
function showLanguages(){
    hide("home")
    hide("skills")
    hide('projects')
    // document.getElementById('home').style.display = 'none';
    // document.getElementById("skills").style.display = "none";
    // document.getElementById("projects").style.display = "none";
    document.getElementById('languages').style.display = "";
}