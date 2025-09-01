const switchThemeBtn = document.querySelector('#switch-theme')
const navMenu = document.querySelector('#nav-menu')


switchThemeBtn.addEventListener('click' , ()=>{
  if(switchThemeBtn.firstElementChild.classList.contains('hidden')){
    switchThemeBtn.firstElementChild.classList.remove('hidden')
    switchThemeBtn.lastElementChild.classList.add('hidden')
  }
  else{
    switchThemeBtn.lastElementChild.classList.remove('hidden')
    switchThemeBtn.firstElementChild.classList.add('hidden')
  }
  
})
// navToggleBtn.addEventListener('click' , ()=>{
//   if(navMenu.classList.contains('left-2/1')) openMenu()
//   else closeMenu()
// })
navMenu.addEventListener('click' , (e)=>{
  if(e.target==navMenu)closeMenu()
})

let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter.typeString('دانشجوی رشته کامپیوتر')
    .pauseFor(2000)
    .deleteAll()
    .typeString('توسعه‌ دهنده‌ی فرانت‌ اند')
    .pauseFor(2000)
     .deleteAll()
    .typeString('<strong class="text-violet-500">عاشق دنیای  برنامه نویسی</strong>')
    .pauseFor(2500)
    .start();


    function openMenu(){
      navMenu.classList.replace('left-2/1' , 'left-0')
      navMenu.classList.replace('-top-2/1' , 'top-0')
    }
    function closeMenu(){
      navMenu.classList.replace( 'left-0' ,'left-2/1')
      navMenu.classList.replace( 'top-0' ,'-top-2/1')

    }