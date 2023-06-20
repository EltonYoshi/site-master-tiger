const carrosselContainer = document.querySelector('.carrossel-container');
        let translateValue = 0;
        const itemWidth = 20;
      
        function moverParaEsquerda() {
          if (translateValue < 0) {
            translateValue += itemWidth;
            carrosselContainer.style.transform = `translateX(${translateValue}%)`;
          }
        }
      
        function moverParaDireita() {
          const carrosselWidth = carrosselContainer.offsetWidth;
          const containerWidth = carrosselContainer.scrollWidth;
          if (containerWidth - translateValue > carrosselWidth) {
            console.log(translateValue)
            if(translateValue> - 45){
            translateValue -= itemWidth;
            carrosselContainer.style.transform = `translateX(${translateValue}%)`;}
          }
        }