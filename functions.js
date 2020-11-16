function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("elementul nu exista");
    }
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for(var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var id = page.id;
        hide(id);
    }
}


function showPage(pageId){
    hideAllPages();
    document.getElementById(pageId).style.display = '';  
}


function showHome(){
    showPage('home');
    // hideAllPages();
    // document.getElementById('home').style.display = '';  
}

function showSkills(){
    showPage('skills');
    // hideAllPages();
    // document.getElementById('skills').style.display = "";  
}

 function showProjects(){
    showPage('projects');
    // hideAllPages();
    // document.getElementById('projects').style.display = "";
}
function showLanguages(){
    showPage('languages')
    // hideAllPages();
    // // document.getElementById('home').style.display = 'none';
    // // document.getElementById("skills").style.display = "none";
    // // document.getElementById("projects").style.display = "none";
    // document.getElementById('languages').style.display = "";
}

