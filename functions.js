function skills() {
    var page = document.getElementById('skills');
    page.style.display = '';
}

function hideHome() {
    var home = document.getElementById('home');
    home.style.display = 'none';
}

function hideLanguages () {
    var languages = document.getElementById('languages');
    languages.style.display = 'none';
}

function showSkillsPage() {
    // var page = document.getElementById('skills');
    // page.style.display = '';
    skills();

    hideHome();
    hideLanguages();
    // var home = document.getElementById('home');
    // home.style.display = 'none';
    // var languages = document.getElementById('languages');
    // languages.style.display = 'none';
}

function showLanguagesPage() {
    var languages = document.getElementById('languages');
    languages.style.display = '';

    var home = document.getElementById('home');
    home.style.display = 'none';
    var page = document.getElementById('skills');
    page.style.display = 'none';
    var project = document.getElementById("projects");
    project.style.display = 'none';
}

function showProjectsPage() {
    var project = document.getElementById("projects");
    project.style.display = '';

    var home = document.getElementById('home');
    home.style.display = 'none';
    var languages = document.getElementById('languages');
    languages.style.display = 'none';
    var page = document.getElementById('skills');
    page.style.display = 'none';
}

function showPageHome() {
    var home = document.getElementById('home');
    home.style.display = '';

    var languages = document.getElementById('languages');
    languages.style.display = 'none';
    var page = document.getElementById('skills');
    page.style.display = 'none';
    var project = document.getElementById("projects");
    project.style.display = 'none';
}