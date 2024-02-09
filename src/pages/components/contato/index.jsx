import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../button';
import Input from '../input';
import Select from '../select';
import Styles from './contato.module.scss';
import { Loading } from '../loading';
import { SuccessModal } from '../successModal';
import { FailModal } from '../failModal/index ';

const Contato = () => {
    const [isLoading, setLoading] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [failModal, setFailModal] = useState(false);

    // utilizing formik for form
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            media: ""
        },
        // validation form with Yup
        validationSchema: Yup.object({
            name: Yup.string().required("Campo obrigatório"),
            email: Yup.string()
                .email("E-mail inválido")
                .required("Campo obrigatório"),
            phone: Yup.string()
                .matches("", "Digite um telefone válido")
                .required("Campo obrigatório"),
            website: Yup.string().required("Campo obrigatório"),
            media: Yup.string().required("Campo obrigatório")
        }),
        // where validate
        validateOnChange: false,
        validateOnBlur: false,
        // onSubmit with callback
        onSubmit: (values) => handleSubmitForm(values)
    });

    const handleSubmitForm = (values) => {
        setLoading(true);
        axios
            .post("/api/sendEmail", { messageBody: `Nome ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Site ${values.website}, Mídia: ${values.media}` })
            .then(() => {
                formik.resetForm();
                setLoading(false);
                setSuccessModal(true);
            })
            .catch(() => {
                setLoading(false);
                setFailModal(true);
            });
    }

    const closeModal = () => {
        setSuccessModal(false);
        setFailModal(false);
    }

    return (
        <>
            {successModal && <SuccessModal closeModal={closeModal} />}
            {failModal && <FailModal closeModal={closeModal} />}
            {isLoading && <Loading />}
            <div className={Styles.container} id="contato">
                <div className={Styles.texts}>
                    <span>ENTRE EM CONTATO</span>
                    <h1>Aumente seu resultado de vendas e performance</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                </div>
                <div className={Styles.form}>
                    <h1>Fale com um especialista</h1>

                    <form id="formulario" onSubmit={formik.handleSubmit}>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Nome completo"
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            required
                        />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail profissional"
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            required />
                        <Input
                            id="phone"
                            name="phone"
                            type="number"
                            placeholder="Celular/Whatsapp"
                            value={formik.values.phone}
                            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            required
                        />
                        <Input
                            id="website"
                            name="website"
                            type="text"
                            placeholder="Site"
                            value={formik.values.website}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            required />
                        <Select
                            id="media"
                            name="media"
                            type="text"
                            placeholder="Orçamento para mídia"
                            value={formik.values.media}
                            onChange={formik.handleChange}
                            options={[
                                { label: "Instagram", value: "instagram" },
                                { label: "Facebook", value: "facebook" }
                            ]}
                            required
                        />

                        <Button
                            type="submit"
                            title="Enviar"
                            kind="full"
                        />
                    </form>
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
        </>
    );
}

export default Contato;