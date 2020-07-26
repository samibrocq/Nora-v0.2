function showEntreprises() {
    
    var sections = document.getElementsByClassName('domain')
    var menus = document.getElementsByClassName('menu-option')
    for (var i=0; i<sections.length ; i++){
        sections[i].style.display = 'none';
        menus[i].style.color = '#78aca6';
        menus[i].style.borderBottomColor = '#c5c4c4';
    }
    
    var sectionEntreprises = document.getElementById('entreprises')
    sectionEntreprises.style.display = 'flex'
    
    var menuEntreprises = document.getElementById('menu-entreprises');
    menuEntreprises.style.color = '#29514d';
    menuEntreprises.style.borderBottomColor = '#29514d'
}

showEntreprises();



function showCollectivites(){
    
    var sections = document.getElementsByClassName('domain');
    var menus = document.getElementsByClassName('menu-option');
    for (var i=0; i<sections.length ; i++){
        sections[i].style.display = 'none';
        menus[i].style.color = '#78aca6';
        menus[i].style.borderBottomColor = '#c5c4c4';
    }
   
    var sectionCollectivites = document.getElementById('collectivites')
    sectionCollectivites.style.display = 'flex';
    var menuEntreprises = document.getElementById('menu-collectivites');
    menuEntreprises.style.color = '#29514d';
    menuEntreprises.style.borderBottomColor = '#29514d'
}


function showHopitaux(){
    var sections = document.getElementsByClassName('domain');
    var menus = document.getElementsByClassName('menu-option');
    for (var i=0; i<sections.length ; i++){
        sections[i].style.display = 'none';
        menus[i].style.color = '#78aca6';
        menus[i].style.borderBottomColor = '#c5c4c4';
    }
   
    var sectionHopitaux = document.getElementById('hopitaux')
    sectionHopitaux.style.display = 'flex';
    var menuHopitaux = document.getElementById('menu-hopitaux');
    menuHopitaux.style.color = '#29514d';
    menuHopitaux.style.borderBottomColor = '#29514d';
}