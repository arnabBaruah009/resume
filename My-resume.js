
var navList = document.querySelectorAll('#nav-list a');

for(item of navList){
    item.addEventListener('click', function(e){
        e.preventDefault();
        var sectionID = this.textContent.trim().toLowerCase();
        var section = document.getElementById(sectionID);
        var scroll = setInterval(function(){
            var coordinates = section.getBoundingClientRect();
            if(coordinates.top <= 50){
                clearInterval(scroll);
                return;
            }
            window.scrollBy(0, 60);
        }, 20);
    });
}

let skillBars = document.querySelectorAll('.skill-status');

window.addEventListener('scroll', checkScroll);

function fillBar(bar){
    let targetWidth = bar.getAttribute('data-skill-percent');
    let currentWidth = 10;
    let interval = setInterval(function (){
        if(currentWidth >= targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    })
}

function checkScroll(){
    for(let bar of skillBars){
        let barCoordinates = bar.getBoundingClientRect();
        let boolean = bar.getAttribute('data-fillStatus') == 'false' ? false : true;
        if(!boolean && barCoordinates.top <= (window.innerHeight -150)){
            bar.setAttribute('data-fillStatus', 'true');
            fillBar(bar);
        } else if(barCoordinates.top > window.innerHeight){
            bar.style.width = 10 + '%';
            bar.setAttribute('data-fillStatus', 'false');
        }
    }
}

const contact = document.getElementById('bottom');

contact.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})
