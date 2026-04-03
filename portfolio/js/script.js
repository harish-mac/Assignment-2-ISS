

const savedTheme = localStorage.getItem("theme-preference") || "dark";
if (savedTheme === "light") 
{
    document.body.classList.add("light");
}
    

function switch_theme()
{
    console.log("switch");
     const theme = document.body.classList.contains("light") ? "light" : "dark";
    document.body.classList.toggle("light");    
}

function go_to_about()
{
    console.log("go to about");
    window.location.href = "about.html";
}


function filterProjects(clickedTag) 
{
    
    const cards = document.querySelectorAll('.projectdesc');
    const buttons = document.querySelectorAll('.filter');


    for (let i = 0; i < cards.length; i++) 
    {
        const card = cards[i];
        const cardTag = card.getAttribute('data-tag');

        
        if (clickedTag === 'all' || clickedTag === cardTag) 
        {
            card.style.display = "block";
        } 
        else 
        {
            card.style.display = "none";
        }
    }

    if (clickedTag === 'all') 
    {
        window.history.pushState({}, '', 'projects.html');
    } 
    else 
    {
        window.history.pushState({}, '', '?data-tag=' + clickedTag);
    }
}


window.onload = function() 
{
    const buttons = document.querySelectorAll('.filter');
    
    for (let i = 0; i < buttons.length; i++) 
        {
        buttons[i].onclick = function() {
            const tag = this.getAttribute('data-tag');
            filterProjects(tag);
        };
    }
};



document.addEventListener("DOMContentLoaded", function () {

  
    const timeline = document.querySelector(".timeline");

    timeline.addEventListener("click", function (event) {

        const clickedItem = event.target.closest(".timeline-content");

        if (clickedItem === null) 
        {
            return;
        }


        const allItems = document.querySelectorAll(".timeline-content");


        for (let i = 0; i < allItems.length; i++)
             {
            allItems[i].setAttribute("aria-expanded", "false");
        }

       
        clickedItem.setAttribute("aria-expanded", "true");
    });

});