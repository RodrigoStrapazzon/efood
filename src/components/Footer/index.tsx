import imgEfood from '../../assets/image/logo.svg'
import imgInsta from '../../assets/image/Insta.svg'
import imgFace from '../../assets/image/Face.svg'
import imgTwitter from '../../assets/image/Twitter.svg'
import * as S from './styles'

const Footer = () => (
  <S.FooterBox className="container">
    <img className="imgEfood" src={imgEfood} alt="logo efood" />
    <div className="imgLinks">
      <a href="#">
        <img src={imgInsta} alt="logo instagram" />
      </a>
      <a href="#">
        <img src={imgFace} alt="logo instagram" />
      </a>
      <a href="#">
        <img src={imgTwitter} alt="logo instagram" />
      </a>
    </div>
    <S.Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </S.Paragrafo>
  </S.FooterBox>
);

export default Footer;
