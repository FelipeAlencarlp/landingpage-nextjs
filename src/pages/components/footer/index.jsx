import Image from 'next/image';
import Styles from './footer.module.scss';
import Logo from '../../../../public/images/logo.svg';
import Link from 'next/link';
import IconInstagram from '../../../../public/images/icon-instagram.svg';
import IconFacebook from '../../../../public/images/icon-facebook.svg';
import IconLinkedin from '../../../../public/images/icon-linkedin.svg';
import IconYoutube from '../../../../public/images/icon-youtube.svg';

const Footer = () => {
    return (
        <div className={Styles.container}>
            <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
                <Image src={Logo} alt="logo" />
                <h1 className={Styles.title}>0800 800 800</h1>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={Styles.column}>
                <h1>MENU</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={Styles.column}>
                <h1>CONTEÚDO</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${Styles.column} ${Styles.alignRigth}`}>
                <h1>SOCIAL</h1>
                <div className={Styles.icons}>
                    <Link href="/">
                        <Image src={IconInstagram} alt="Icon" />
                    </Link>
                    <Link href="/">
                        <Image src={IconFacebook} alt="Icon" />
                    </Link>
                    <Link href="/">
                        <Image src={IconLinkedin} alt="Icon" />
                    </Link>
                    <Link href="/">
                        <Image src={IconYoutube} alt="Icon" />
                    </Link>
                </div>
            </div>
            <div className={Styles.allRigthReserved}>
                ©2022 AGENCIA - Todos os direitos reservados.
            </div>
        </div>
    );
}

export default Footer;