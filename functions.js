function hide(id) {
    var el = document.getElementById(id);
    el.style.display = 'none';
}

function show(id) {
    var el = document.getElementById(id);
    el.style.display = '';
}

function hideAllPages(){
    var pagesIds = ["home", "skills", "languages", "projects"]
//        initial;     conditie;       post-executie
    for(var i = 0; i < pagesIds.length; i++) {
            hide(pagesIds[i]);
    } 
}

function showPageHome() {
    hideAllPages();
    show('home');
}

function showSkillsPage() {
    hideAllPages();
    show('skills');
}

function showLanguagesPage() {
    hideAllPages();
    show('languages');
}

function showProjectsPage() {
    hideAllPages();
    show("projects");
}