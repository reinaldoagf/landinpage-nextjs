import React, { useRef, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Spinner from "../components/Spinner";
import axios from 'axios';


const MySwal = withReactContent(Swal)
const ContactForm = () => {
    const form = useRef(null);
    const [loading, setLoading] = useState(false);    
    const nameRegexp = new RegExp(/^[a-zA-Z\s]+$/)
    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    const phoneRegexp = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
    const [formFields, setFormFields] = React.useState({
        firstname: { value: "", hasError: false },
        lastname: { value: "", hasError: false },
        email: { value: "", hasError: false },
        phone: { value: "", hasError: false }
    });
    const onSubmit = (event) => {
        event.preventDefault();
        if (!formFields.firstname.hasError && !formFields.lastname.hasError &&  !formFields.email.hasError) {
            const formData = new FormData(form.current);
            setLoading(true);
            axios.post('https://jsonplaceholder.typicode.com/users', {
                firstname: formData.get('firstname'),
                lastname: formData.get('lastname'),
                email: formData.get('email'),
                phone: formData.get('phone')
            })
                .then(res => {
                    setLoading(false);
                    console.log(res);
                    MySwal.fire('Datos de contacto enviados con éxito')
                })
                .catch(error => {
                    setLoading(false);
                    console.log(error);
                })
        }
    }
    return (
        <>
            <form id="event-form" ref={form} onSubmit={onSubmit}>
                <div className="fieldset-wrapper">
                    <div className="input-wrapper">
                        <div className="complete-name">
                            <label htmlFor="first-name">Nombre</label>
                            <input type="text" id="first-name" name="firstname" required className={formFields.firstname.hasError ? 'invalid' : ''} value={formFields.firstname.value} onChange={({ target }) => {
                                    const hasError = !nameRegexp.test(target.value);
                                    setFormFields((prevState) => ({ ...prevState, firstname: { value: target.value, hasError } }));
                                }}/>
                        </div>
                        <div className="complete-name">
                            <label htmlFor="last-name">Apellido</label>
                            <input type="text" id="last-name" name="lastname" required 
                                className={formFields.lastname.hasError ? 'invalid' : ''} value={formFields.lastname.value} onChange={({ target }) => {
                                    const hasError = !nameRegexp.test(target.value);
                                    setFormFields((prevState) => ({ ...prevState, lastname: { value: target.value, hasError } }));
                                }}/>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <div className="complete-name">
                            <label htmlFor="email">Mail</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className={formFields.email.hasError ? 'invalid' : ''}
                                required
                                value={formFields.email.value} onChange={({ target }) => {
                                    const hasError = !emailRegexp.test(target.value);
                                    setFormFields((prevState) => ({ ...prevState, email: { value: target.value, hasError } }));
                                }}
                                aria-errormessage="emailErrorID"
                                aria-invalid={formFields.email.hasError} />
                        </div>
                        <div className="complete-name">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="text" id="phone" name="phone" required className={formFields.phone.hasError ? 'invalid' : ''} value={formFields.phone.value} onChange={({ target }) => {
                                    const hasError = !phoneRegexp.test(target.value);
                                    setFormFields((prevState) => ({ ...prevState, phone: { value: target.value, hasError } }));
                                }}/>
                        </div>
                    </div>
                </div>
            </form>
            {loading && <Spinner />}
            {!loading && <footer>
                <button type="submit" className="button" form="event-form">ENVIAR</button>
            </footer>}
        </>
    )

}

export default ContactForm;