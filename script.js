

function pburgh(){
 let pburgh = document.getElementById('#pittsburgh')
 pittsburgh.addEventListener('mouseenter', function(){
     travels.classList.remove('lokis');
     travels.classList.add('kennywood');
 })
 pittsburgh.addEventListener('mouseleave', function(){
    travels.classList.remove('kennywood');
    travels.classList.add('lokis');
})
}