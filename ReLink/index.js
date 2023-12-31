let isDragging = false;
let startX;
let scrollLeft;

// Use querySelectorAll to select all elements with the class 'container'
const containers = document.querySelectorAll('.container');

containers.forEach(container => {
  container.addEventListener('mousedown', startDrag);
  container.addEventListener('mouseup', endDrag);
  container.addEventListener('mousemove', drag);

  container.addEventListener('touchstart', startDrag);
  container.addEventListener('touchend', endDrag);
  container.addEventListener('touchmove', drag);
});

function startDrag(e) {
  isDragging = true;
  startX = (e.type === 'mousedown') ? e.pageX : e.touches[0].pageX;
  scrollLeft = e.currentTarget.scrollLeft;
}

function endDrag() {
  isDragging = false;
}

function drag(e) {
  if (!isDragging) return;

  const currentX = (e.type === 'mousemove') ? e.pageX : e.touches[0].pageX;
  const walk = (currentX - startX) * 1;
  e.currentTarget.scrollLeft = scrollLeft - walk;
}



    var searchTimer;

function startSearchTimer() {
    clearTimeout(searchTimer);

    searchTimer = setTimeout(function() {
        searchItems();
    }, 500);
}

function searchOnEnter(event) {
    if (event.keyCode === 13) {
        searchItems();
    }
}

function searchItems() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();

        var buttons = document.querySelectorAll('.ag-courses_item');

        var foundButtons = false;

buttons.forEach(function(button) {
    var buttonText = button.textContent.toLowerCase();
    
    if (buttonText.includes(searchValue)) {
        button.style.display = 'block';
        foundButtons = true;
    } else {
        button.style.display = 'none';
    }
});

if (!foundButtons) {
    var message = document.querySelectorAll('.searchMessage');
    message.forEach(function(message){
    message.style.display = 'block';});

    var bar = document.querySelectorAll('.button-container:focus');
    bar.forEach(function(bar){
        bar.style.border = '2px solid var(--warning)';
        bar.style.color= 'var(--warning)';});

        var bar2 = document.querySelectorAll('.button-container');
    bar2.forEach(function(bar2){
        bar2.style.border = '2px solid var(--warning)';
        bar2.style.color= 'var(--warning)';});
}else{
    var message = document.querySelectorAll('.searchMessage');
    message.forEach(function(message){
    message.style.display = 'none';});

    var bar = document.querySelectorAll('.button-container:focus');
    bar.forEach(function(bar){
        bar.style.border = '2px solid var(--main)';
    bar.style.color= 'var(--light)';});

    var bar2 = document.querySelectorAll('.button-container');
    bar2.forEach(function(bar2){
        bar2.style.border = '2px solid var(--main)';
        bar2.style.color= 'var(--light)';});
}


}


var update = document.getElementById("spicyModeChanger");
update.onclick = function() { 
    //var showLinkHubContent = true;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if(urlParams.get('spicyMode')){
        urlParams.delete('spicyMode');
        const newUrl = window.location.pathname + '?' + urlParams.toString();
        window.history.replaceState(null, null, newUrl);
    }else{
        window.history.replaceState(null, null, "?spicyMode=1");
        alert("Spicy mode enabled, click again to make web family friendly again (not rly tho)")
    }
    
    //if (showLinkHubContent) {
    //    console.log('Show Link Hub content');
    //}
    
    setSpicyVisible();
    location.reload();
}

function setSpicyVisible(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    if(urlParams.get('spicyMode')){
        const spicyMode = urlParams.get('spicyMode');
        var spicy = document.querySelectorAll('.spicy');

        spicy.forEach(function(spicy) {
            var buttonText = spicy.textContent.toLowerCase();
                spicy.style.display = 'block';

        });
    }else{
        const spicyMode = urlParams.get('spicyMode');
        var spicy = document.querySelectorAll('.spicy');

        spicy.forEach(function(spicy) {
            var buttonText = spicy.textContent.toLowerCase();
                spicy.remove();

        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setSpicyVisible();
 }, false);


    
 