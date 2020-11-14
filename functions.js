function hide(id){
   console.info("hide:" + id);
   document.getElementById(id).style.display = "none";
}

 function hideAllPages() {
     hide('home')
     hide("skills")
     hide("projects")
     hide("languages")

    // var pages= document.querySelectorAll(".page");
    // // for (intitializare; conditie; post executie)
    // for (var i = 0; i < pages.length; i++) {
    //     var id = pages[i].id
    //     console.info("i=", i, pages[i]);
    //     hide(id)
    // }
        
    }

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

