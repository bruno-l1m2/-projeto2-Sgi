import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './style.css';

/* API Caixas POP-UP DO JAVASCRIPT https://sweetalert2.github.io/#examples */
import Swal from 'sweetalert2'

/* Página de login contendo os campos de email e senha. */
const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validarP, setValidarP] = useState(true);
    const [validarE, setValidarE] = useState(true);

    /* No evento de onSubmit, validar se os campos foram preenchidos: E-Mail (obrigatório) e Senha (obrigatório). */
    const handleSubmit = (event) => {
            event.preventDefault();
            if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                Swal.fire('E-mail é obrigatório "exemplo@email.com"');
                setValidarE(false);
                return
            } else if (password.length < 8) {
                Swal.fire('Senha é obrigatório, no minimo 8 caracteres');
                setValidarP(false);
                return
            }
            /* Ao validar os campos de input, o usuário é redirecionado para a tela de Mapa. */ 
            Swal.fire('Bem vindo ao SGI - Sistema de Gestão Integrada');
            
            history.push("/Home"); 
    };

    /* Validar os campos de input se estão preenchidos corretamente e remove o input de alerta da tela. */
    useEffect(() => {
        if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setValidarE(true);
        }
     }, [email])

    useEffect(() => {
        if (password.length > 7) {
            setValidarP(true);
        }
      }, [password])

    return (
        <div className="content_lgn">
            <form className="container_form_lgn" onSubmit={handleSubmit}>
                <h1>
                    Login
                </h1>
                <label className="lbl_pass_lgn">
                    Email
                </label>
                <input 
                    type="text" 
                    className="i_lgn"
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Digite seu E-mail"
                />
                {!validarE && <input type="text" className="i_lgn_v" value='E-mail é obrigatório' />}
                <label className="lbl_pass_lgn">
                    Senha
                </label>
                <input 
                    type="password" 
                    className="i_lgn"
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Digite sua Senha"
                />
                
                {!validarP && <input type="text" className="i_lgn_v" value='Senha é obrigatório' />}
                <button
                    className="btn_entrar_lgn"
                    type="submit">
                    Sign in
                </button>
            </form>       
        </div>
    );

};

export default Login;