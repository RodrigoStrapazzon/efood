import LogoEfood from "../../assets/image/logo.svg";
import LogoInsta from "../../assets/image/Insta.svg";
import LogoFace from "../../assets/image/Face.svg";
import LogoTwitter from "../../assets/image/Twitter.svg";
import { FooterBox, Paragrafo } from "./styles";

const Footer = () => (
  <FooterBox>
    <img className="imgEfood" src={LogoEfood} alt="logo efood" />
    <div className="imgLinks">
      <a href="#">
        <img src={LogoInsta} alt="logo instagram" />
      </a>
      <a href="#">
        <img src={LogoFace} alt="logo instagram" />
      </a>
      <a href="#">
        <img src={LogoTwitter} alt="logo instagram" />
      </a>
    </div>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </Paragrafo>
  </FooterBox>
);

export default Footer;
