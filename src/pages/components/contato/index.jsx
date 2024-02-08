import Link from 'next/link';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import Styles from './contato.module.scss';
import axios from 'axios';
import { useState } from 'react';

const Contato = () => {
    const [nome, setNome] = useState(null);
    const [email, setemail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [site, setSite] = useState(null);
    const [midia, setMidia] = useState(null);

    const SendMail = () => {
        axios
            .post("/api/sendEmail", { messageBody: `Nome ${nome}, Email: ${email}, Telefone: ${telefone}, Site ${site}, Mídia: ${midia}` })
            .then(() => console.log("Uhull"))
            .catch(() => console.log("Ops.."));
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
            </div>
            <div className={Styles.form}>
                <h1>Fale com um especialista</h1>

                {/* <form> */}
                <Input
                    type="text"
                    placeholder="Nome completo"
                    onBlur={(e) => setNome(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="E-mail profissional"
                    onBlur={(e) => setEmail(e.target.value)}
                    required />
                <Input
                    type="number"
                    placeholder="Celular/Whatsapp"
                    pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                    onBlur={(e) => setTelefone(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Site"
                    onBlur={(e) => setSite(e.target.value)}
                    required />
                <Select
                    type="text"
                    placeholder="Orçamento para mídia"
                    onChange={(EM) => setMidia(e.target.value)}
                    options={[
                        { label: "Instagram", value: "instagram" },
                        { label: "Facebook", value: "facebook" }
                    ]}
                    required
                />

                <Button title="Enviar" kind="full" onClick={() => SendMail()} />
                {/* </form> */}
            </div>
            <div className={Styles.footer}>
                <p>
                    Ao enviar esse formulário, você reconhece que leu e concorda com a nossa
                    <Link href="/">
                        <span> Política de Privacidade.</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Contato;