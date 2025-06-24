function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }
        
        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }


const accordion = document.getElementsByClassName('content-container');

for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active');
    });
};


function showMore (){
    const content = document.getElementById("moreInfo");
    if(content.style.display === "none"){
        content.style.display = "block";
    } else{
        content.style.display = "none";
    }
}




  
