import './Home.css'
import { useEffect, useState } from 'react';
import ButtonA from '../objetos/ButtonA';

const Home = () =>{

  const [text, setText] = useState('');

  const toRotate = ['Carlos Lima', 'Desenvolvedor Front-end', 'especializado em React.Js'];

  const [loop, setLoop] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);

  const period = 150;
  const [delta, setDelta] =useState(100); 

  useEffect(() =>{
    let ticker = setInterval (() =>{
      toType()
    }, delta)
    return ()=> {clearInterval(ticker)}
  }, [text])

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

  return (
    <div id='Home'>
      
        <h2>Bem- vindo ao meu Portifolio! </h2><br/>
         <h1> Olá, eu sou {text}</h1>
        <p>Com meus 25 anos de idade, minha vida é marcada por várias paixões.<br/>
          Sou um jogador ávido de videogames, encontrando neles uma fonte de diversão.<br/>
          Além disso, o futebol ocupa um lugar especial em meu coração, seja como jogador ou torcedor fervoroso.<br/>
          Minha vida ganha ainda mais significado com a presença da minha adorável filha e da minha esposa,<br/>
          que são o centro das minhas atenções e carinho.<br/><br/>
          No entanto, o que realmente me motiva é a tecnologia.<br/>
          Minha paixão por inovação e gadgets modernos é evidente<br/>
          em minha busca constante por novidades e minha sede por conhecimento nesse campo.<br/>
          Equilibrando todas essas paixões, trilho um caminho emocionante na busca por um futuro<br/>
           cheio de realizações e descobertas.</p>
            <br/><br/>
          <ButtonA link={'mailto:dev.frontcarloslima@gmail.com?subject=Interesse no Trabalho'} text={'Conecte-se comigo!'} />
          <br/><br/><br/><br/>
    </div>
  )
}

export default Home;
