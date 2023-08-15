const container = document.querySelector('#container');


function column() {


    for (let i = 0; i < 16; i++) {

        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'BOX';
    
        container.appendChild(content);
      } 

  

}

column();