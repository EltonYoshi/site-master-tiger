const carrosselContainer = document.querySelector('.carrossel-container');
        let translateValue = 0;
        let itemWidth = 20;
      
        function moverParaEsquerda() {
          const isMobile = /Mobi|Android/i.test(navigator.userAgent);

          if (isMobile) {
            itemWidth = 82;
        } else{
            itemWidth = 20;
        }
        if (translateValue < 0) {
          translateValue += itemWidth;
          carrosselContainer.style.transform = `translateX(${translateValue}%)`;
        }
      }
      
        function moverParaDireita() {
          const carrosselWidth = carrosselContainer.offsetWidth;
          const containerWidth = carrosselContainer.scrollWidth;
          let itemWidth = 82;
          
          // Verificar se é um dispositivo móvel
          const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        
          if (isMobile) {
            if (containerWidth - translateValue > carrosselWidth) {
              console.log(translateValue);
              if (translateValue > -250) {
                translateValue -= itemWidth;
                carrosselContainer.style.transform = `translateX(${translateValue}%)`;
              }
            }
          } else {
            // Código para comportamento no desktop
            let itemWidth = 20;
            if (containerWidth - translateValue > carrosselWidth) {
              console.log(translateValue);
              if (translateValue > -80) {
                translateValue -= itemWidth;
                carrosselContainer.style.transform = `translateX(${translateValue}%)`;
              }
            }
          }
        }
        







        const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', function() {
  mobileMenuIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});





var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('Message')
    var body = 'name: ' +name + '<br/> email: ' + email+ '<br/>message' + message;

    Email.send({
    Host : "smtp.gmail.com",
    Username : "master.tiger22344@gmail.com",
    Password : "MASTIGER!23",
    To : 'yoshielton79@gmail.com,',
    From : Email,
    Subject : "Mesagem do site",
    Body : body}).then(message => alert(message));})


