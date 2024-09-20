let allBtn = document.getElementById('all');
let breakBtn = document.getElementById('break');
let lunchBtn = document.getElementById('lunch');
let shakesBtn = document.getElementById('shakes');
let dinnerBtn = document.getElementById('dinner');

let sectionsCenter = document.querySelectorAll('.section-center');

// let Articles = document.querySelectorAll('.menu-item');
// let myArray = Array.from(Articles);
// console.log(myArray);

allBtn.onclick = () => {
sectionsCenter.forEach((e) => {
    e.classList.remove("breakfast");
    e.classList.remove("lunch");
    e.classList.remove("shakes");
    e.classList.remove("dinner");
    e.classList.remove("active");
    
     if(e.classList.contains('one')) {
        e.classList.add("all");
     }
})
};


breakBtn.onclick = () => {
    sectionsCenter.forEach((e) => {
        e.classList.remove("all");
        e.classList.remove("lunch");
        e.classList.remove("shakes");
        e.classList.remove("dinner");
        e.classList.remove("active");
        if(e.classList.contains('two')) {
            e.classList.add("breakfast");
        }
       
    })
    };
    lunchBtn.onclick = () => {
        sectionsCenter.forEach((e) => {
            e.classList.remove("all");
            e.classList.remove("breakfast");
            e.classList.remove("shakes");
            e.classList.remove("dinner");
            e.classList.remove("active");
            if(e.classList.contains('three')) {
                e.classList.add("lunch");
            }
           
        })
        };
        shakesBtn.onclick = () => {
            sectionsCenter.forEach((e) => {
                e.classList.remove("all");
                e.classList.remove("breakfast");
                e.classList.remove("lunch");
                e.classList.remove("dinner");
                e.classList.remove("active");
                if(e.classList.contains('four')) {
                    e.classList.add("shakes");
                }
            })
            };
            dinnerBtn.onclick = () => {
                sectionsCenter.forEach((e) => {
                    e.classList.remove("all");
                    e.classList.remove("breakfast");
                    e.classList.remove("lunch");
                    e.classList.remove("shakes");
                    e.classList.remove("active");
                    if(e.classList.contains('five')) {
                        e.classList.add("dinner");
                    }
                })
                };