

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

function disney(){
    let disney = document.getElementById('#disneyland')
    disneyland.addEventListener('mouseenter', function(){
        travels.classList.remove('lokis');
        travels.classList.add('dl');
    })
    disneyland.addEventListener('mouseleave', function(){
       travels.classList.remove('dl');
       travels.classList.add('lokis');
   })
   }

   function purrgrowl(){
       let purrgrowl = document.getElementById('#kittydog')
       kittydog.addEventListener('mouseenter', function(){
        travels.classList.remove('lokis');
        travels.classList.add('weird');
    })
    kittydog.addEventListener('mouseleave', function(){
       travels.classList.remove('weird');
       travels.classList.add('lokis');
   })
   }