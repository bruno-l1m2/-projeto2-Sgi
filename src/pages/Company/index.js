import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import './style.css';

/* API Caixas POP-UP DO JAVASCRIPT https://sweetalert2.github.io/#examples */
import Swal from 'sweetalert2';


const Company = () =>{

        const [razao, setRazao] = useState('');
        const [nome, setNome] = useState('');
        const [cnpj, setCnpj] = useState('');
        const [email, setEmail] = useState('');
        const [cep, setCep] = useState('');
        const [endereco, setEndereco] = useState('');
        const [numero, setNumero] = useState('');
        const [bairro, setBairro] = useState('');
        const [cidade, setCidade] = useState('');
        const [complemento, setComplemento] = useState('');
        const [latitude, setLatitude] = useState('');
        const [longitude, setLongitude] = useState('');

        const [vrazao, setVrazao] = useState(true);
        const [vnome, setVnome] = useState(true);
        const [vcep, setVcep] = useState(true);
        const [vendereco, setVendereco] = useState(true);
        const [vnumero, setVnumero] = useState(true);
        const [vbairro, setVbairro] = useState(true);
        const [vcidade, setVcidade] = useState(true);
        const [vlatitude, setVlatitude] = useState(true);
        const [vlongitude, setVlongitude] = useState(true);
        const [vcnpj, setVcnpj] = useState(true);
        const [vemail, setVemail] = useState(true);

        const handleSubmit = async (event) => {
            try{
                event.preventDefault();

                if (!razao){
                    Swal.fire('Razão social é obrigatário');
                    setVrazao(false);
                    return
                } else if (!nome){
                    Swal.fire('Nome é obrigatário');
                    setVnome(false);
                    return
                }else if (!cnpj){
                    Swal.fire('CNPJ é obrigatário');
                    setVcnpj(false);
                    return
                }
                 else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                    Swal.fire('E-mail é invalido "exemplo@email.com"');
                    setVemail(false);
                    return
                } else if (!cep) {
                    Swal.fire('CEP é obrigatório');
                    setVcep(false);
                    return
                }else if (!endereco){
                    Swal.fire('Endereço é obrigatário');
                    setVendereco(false);
                    return
                }else if (!numero){
                    Swal.fire('Número é obrigatário');
                    setVnumero(false);
                    return
                }else if (!bairro){
                    Swal.fire('Bairro é obrigatário');
                    setVbairro(false);
                    return
                }else if (!cidade){
                    Swal.fire('Cidade é obrigatário');
                    setVcidade(false);
                    return
                }else if (!latitude){
                    Swal.fire('Latitude é obrigatário');
                    setVlatitude(false);
                    return
                }else if (!longitude){
                    Swal.fire('Longitude é obrigatário');
                    setVlongitude(false);
                    return
                }

                await fetch(
                    'http://localhost:3333/company',
                    {
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                      method: "POST",
                      body: JSON.stringify({
                        "razao": razao,
                        "nome": nome,
                        "cnpj": cnpj,
                        "email": email,
                        "cep": cep,
                        "endereco": endereco,
                        "numero": numero,
                        "bairro": bairro,
                        "cidade": cidade,
                        "complemento": complemento,
                        "coordinates":[latitude, longitude]
                        
                      })
                    }
                );
                clean();
                Swal.fire('Empresa cadastrada com sucesso!');
                

            } catch (error) {
                Swal.fire('Estamos indisponivel, por favor tente novamente mais tarde. Obrigado!')
              }
        };

        const clean = () =>{
            setRazao('');
            setNome('');
            setCnpj('');
            setEmail('');
            setCep('');
            setEndereco('');
            setNumero('');
            setBairro('');
            setCidade('');
            setComplemento('');
            setLatitude('');
            setLongitude('');
        }

        useEffect(() => {
            if (razao){
                setVrazao(true);
            } 
            if (nome){
                setVnome(true);
            }
            if (cnpj){
                setVcnpj(true);
            }
            if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                setVemail(true);
            }
            if (cep) {
                setVcep(true);
            }
            if (endereco){
                setVendereco(true);
        
            }
            if (numero){
                setVnumero(true);
            }
            if (bairro){
                setVbairro(true);
            }
            if (cidade){
                setVcidade(true);
            }
            if (latitude){
                setVlatitude(true);
            }
            if (longitude){
                setVlongitude(true);
            }
        },[razao,nome,cnpj,email,cep,endereco,numero,bairro,cidade,latitude,longitude]);



        
        return (
            <>
                <Header/>
                <div className="contanier_Company">
                    <form className="Form_Company" onSubmit={handleSubmit}>
                        <div className="title_Company">
                            <h1 className="h1_Company">Nova Empresa</h1>
                            <div className="but_Company">    
                                <button type="button" className="but1_Company" onClick={clean} >Cancelar</button>
                                <button type="submit" className="but2_Company">Salvar</button>
                            </div>
                        </div>
                        <div className="item_Company">
                            <label className="campo1_company">Razão social</label>
                            <label className="campo1_company">Nome fantasia</label>
                        </div>
                        <div className="item_Company">
                            <input 
                                className="campo2_company" 
                                value={razao}
                                onChange={(event) => setRazao(event.target.value)}
                                type="text" 
                                placeholder="Digite sua razão social..." 
                            />
                            <input 
                                className="campo2_company" 
                                value={nome} 
                                onChange={(event) => setNome(event.target.value)}
                                type="text" placeholder="Digite seu nome fantasia..." 
                            />
                        </div>
                        <div className="item_Company">
                            {!vrazao && <input type="text" className="val_company" value='Razão social é obrigatório' />}
                            {!vnome && <input type="text" className="val2_company" value='Nome fantasia é obrigatório' />}
                        </div>
                        <div className="item_Company">
                            <label className="campo1_company">CNPJ</label>
                            <label className="campo1_company">E-mail</label>
                        </div>
                        <div className="item_Company">
                            <input 
                                className="campo2_company" 
                                value={cnpj} 
                                onChange={(event) => setCnpj(event.target.value)}
                                type="text" placeholder="Digite seu CNPJ..." 
                            />
                            <input 
                                className="campo2_company" 
                                value={email} 
                                onChange={(event) => setEmail(event.target.value)}
                                type="email" 
                                placeholder="Digite seu e-mail..." 
                            />
                            
                        </div>
                        <div className="item_Company">
                            {!vcnpj && <input type="text" className="val_company" value='CNPJ é obrigatório' />}
                            {!vemail && <input type="text" className="val2_company" value='E-mail é obrigatório' />}
                        </div>
                        <div className="lin_Company"></div>
                        <div className="item_Company">
                            <label className="campo1_company">CEP</label>
                            <label className="campo1_company">Endereço</label>
                        </div>
                        <div className="item_Company">
                            <input 
                                className="campo2_company" 
                                value={cep} 
                                onChange={(event) => setCep(event.target.value)}
                                type="text" 
                                placeholder="Digite seu CEP..." 
                            />
                            <input 
                                className="campo2_company"
                                value={endereco}
                                onChange={(event) => setEndereco(event.target.value)}
                                type="text" placeholder="Digite seu endereço..." 
                            />
                        </div>
                        <div className="item_Company">
                            {!vcep && <input type="text" className="val_company" value='CEP é obrigatório' />}
                            {!vendereco && <input type="text" className="val2_company" value='Endereço é obrigatório' />}
                        </div>                    
                        <div className="item_Company">
                            <label className="campo1_company">Número</label>
                            <label className="campo1_company">Bairro</label>
                            <label className="campo1_company">Cidade</label>
                        </div>
                        <div className="item_Company">
                            <input 
                                className="campo2_company" 
                                value={numero}
                                onChange={(event) => setNumero(event.target.value)}
                                type="text" 
                                placeholder="Digite seu número..." 
                            />
                            <input 
                                className="campo2_company" 
                                value={bairro} 
                                onChange={(event) => setBairro(event.target.value)}
                                type="text" 
                                placeholder="Digite seu bairro..." 
                            />
                            <input 
                                className="campo2_company" 
                                value={cidade}
                                onChange={(event) => setCidade(event.target.value)} 
                                type="text" 
                                placeholder="Digite sua cidade..." 
                            />
                        </div>
                        <div className="item_Company">
                            {!vnumero && <input type="text" className="val3_company" value='Número é obrigatório' />}
                            {!vbairro && <input type="text" className="val4_company" value='Bairro é obrigatório' />}
                            {!vcidade && <input type="text" className="val5_company" value='Cidade é obrigatório' />}
                        </div>
                            <div className="item_Company">
                            <label className="campo1_company">Complemento</label>
                            </div>
                        <div className="item_Company">
                            <input 
                                className="campo2_company" 
                                value={complemento} 
                                onChange={(event) => setComplemento(event.target.value)}
                                type="text" 
                                placeholder="Digite seu complemento..." 
                            />
                        </div>
                        <div className="lin_Company"></div>
                        <div className="item_Company">
                            <label className="campo1_company">Latitude</label>
                            <label className="campo1_company">Longitude</label>
                        </div>
                        <div className="item_Company">
                            <input 
                                className="campo2_company" 
                                value={latitude} 
                                onChange={(event) => setLatitude(event.target.value)}
                                type="text" 
                                placeholder="Digite sua latitude..." 
                            />
                            <input 
                                className="campo2_company" 
                                value={longitude} 
                                onChange={(event) => setLongitude(event.target.value)}
                                type="text" 
                                placeholder="Digite sua longitude..." 
                            />
                        </div>
                        <div className="item_Company">
                            {!vlatitude && <input type="text" className="val_company" value='Latitude é obrigatório' />}
                            {!vlongitude && <input type="text" className="val2_company" value='Longitude é obrigatório' />}
                        </div>
                    </form>
                </div>
            </>
        );
}; 

export default Company;