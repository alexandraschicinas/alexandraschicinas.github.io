function hide(id) {
    var el = document.getElementById(id);
    el.style.display = 'none';
}

function show(id) {
    var el = document.getElementById(id);
    el.style.display = '';
}

function hideAllPages(){
    var pages = Array.from(document.querySelectorAll(".page"));
    //obtinem un array normal dintr-un node list
    pages.forEach(function(page){
         hide(page.id);
    });
}

function showPage(pageId) {
    hideAllPages();
    show(pageId);
}

function listenMenuClicks() {
    // init events
    document.addEventListener("click", function(e){
        var link = e.target;
        if(link.matches("#top-meniu-bar a") ) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
    });
}
listenMenuClicks();