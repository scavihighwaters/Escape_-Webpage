window.onload = function() {
  const EFF = document.querySelector(".page2");
  


    window.addEventListener('scroll', scrollEff);

    function scrollEff () {
      if (window.scrollY >=5) {
        EFF.style.opacity = '0';
        EFF.style.transform = 'translateX(0px)';
        EFF.style.transition = '1s ease-in-out';
      } 
      else {
        EFF.style.opacity = '1';
        EFF.style.transform = 'translateX(-0px)';
      }
    };
   scrollEff(); 

   const EFFo = document.querySelector("header");

   window.addEventListener('scroll', scrollEffo);

   function scrollEffo () {
    if (window.scrollY >=5) {
      EFFo.style.opacity = '1';
      EFFo.style.transform = 'translateX(0px)';
      EFFo.style.transition = '1s ease-in-out';
    } 
    else {
      EFFo.style.opacity = '0';
      EFFo.style.transform = 'translateX(-0px)';
    }
  };
 scrollEffo(); 



  const EFF1 = document.querySelector("#yoda");
  
    window.addEventListener('scroll', scrollEff1);

    function scrollEff1 () {
      if (window.scrollY >=500) {
        EFF1.style.opacity = '1';
        EFF1.style.transform = 'translateX(0px)';
        EFF1.style.transition = '1s ease-in-out';
      } 
      else {
        EFF1.style.opacity = '0';
        EFF1.style.transform = 'translateX(-0px)';
      }
    };
   scrollEff1(); 

   const EFF2 = document.querySelector("footer");
  
    window.addEventListener('scroll', scrollEff2);

    function scrollEff2 () {
      if (window.scrollY >=900) {
        EFF2.style.opacity = '1';
        EFF2.style.transform = 'translateX(0px)';
        EFF2.style.transition = '1s ease-in-out';
      } 
      else {
        EFF2.style.opacity = '0';
        EFF2.style.transform = 'translateX(-0px)';
      }
    };
   scrollEff2(); 
 
}

const div = document.querySelector("#dissap");

document.addEventListener("click", function() {
    div.style.display = "block";

    var typed = new Typed('.typ', {
      strings: ['⊑⟒⊬ ⌰⍜⌇⏁ ⏁⍀⏃⎐⟒',"^3800","welcome young jedi!","you've discovered", "an enchanted chamber"," on this distant planet!","^3800",
      "you seek yoda!",
      "and remember," ,"fear is the path", "to the dark side",
      "Now,are you ready to begin", "your escape journey?",
      "follow me!"],
      typeSpeed: 80,
      backspeed: 50,
      loop : false,
    });

    var typed2 = new Typed('.typ1', {
      strings: ["^2000","where am I? do u speak english?","^12000","how do I escape from here?"," "],
      typeSpeed: 80,
      backspeed: 50,
      loop : false
    }); 

},{ once: true });

const diva = document.querySelector("#sign");

diva.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0:
            window.open("./LaMaze/maze_00/maze_00.html", "_blank");
            break;
        case 1:
            window.open("./LaMaze/maze_01/maze_01.html", "_blank");
            break;
        case 2:
            window.open("./LaMaze/maze_02/maze_02.html", "_blank");
            break;
        case 3:
            window.open("./LaMaze/maze_03/maze_03.html", "_blank");
            break;
        case 4:
            window.open("./LaMaze/maze_04/maze_04.html", "_blank");
            break;    
        default:
            openRandomPage();
            break;
    }
});

