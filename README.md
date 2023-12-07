# Meu Portifolio

Eu criei esse portifolio com intiuito de demonstrar um pouco das minhas tecnicas na criação de sites. O portifolio foi feito durante o curso de formação tecnologica da Escola DNC, foi o primeiro portifolio que fiz para mim, ainda estou acrescentando algumas coisas. Ele é composto por uma unica pagin, quando vai rolando para baixo vai aparecendo os outros itens do portifolio, assim que abre o site tem a area de apresentação, depois vem os Skills onde apresento 5 habilidades que possuo, Projetos onde coloquei 2 projetos meus, mas tambem tem um botão que ao clicar te leva para o meu repositorio aqui no git e o Footter com meus contatos e redes sociais.

### Tecnologias usadas

- HTML
- CSS
- JS
- React.js

  ### Pequena part do codigo

   const toType = () =>{
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
    
    setText(updatedText);

    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
      
    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop+1);
    }
  }
