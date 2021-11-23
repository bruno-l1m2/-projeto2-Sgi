import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import './style.css';

/* API Caixas POP-UP DO JAVASCRIPT https://sweetalert2.github.io/#examples */
import Swal from 'sweetalert2';


const Product = () =>{

    const [url, setUrl] = useState('');
    const [nome, setNome] = useState('');
    const [custo, setCusto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [forn, setForn] = useState('');
    const [grup, setGrup] = useState('');

    const [vurl, setVurl] = useState(true);
    const [vnome, setVnome] = useState(true);
    const [vcusto, setVcusto] = useState(true);
    const [vforn, setVforn] = useState(true);
    const [vgrup, setVgrup] = useState(true);

    
    const optionForn = async () => {
        try{
            const result = await fetch('http://localhost:3333/fornecedores');
            const data = await result.json();
            const list = document.querySelector('#list_forn');
            data.map((item) => {
                const option = document.createElement('option');
                option.setAttribute('value', item.fornecedor);
                option.setAttribute('id', item.id);
                option.innerHTML = item.fornecedor;
                list.appendChild(option);
            })
        }catch(error){
            Swal.fire('Consulta de Fornecedor está indisponivel, por favor tente novamente mais tarde. Obrigado!')
        }
    };    
    
    const optionGrup = async () => {
        try{
            const result = await fetch('http://localhost:3333/grupos');
            const data = await result.json();
            const list = document.querySelector('#list_grup');
            data.map((item) => {
                const option = document.createElement('option');
                option.setAttribute('value', item.grupo);
                option.setAttribute('id', item.id);
                option.innerHTML = item.grupo;
                list.appendChild(option);
            })
        }catch(error){
            Swal.fire('Consulta de Fornecedor está indisponivel, por favor tente novamente mais tarde. Obrigado!')
        }
    };

    useEffect (()=>{
        optionForn();
        optionGrup();
    },[]);

    const handleSubmit = async (event) => {
        try{
            event.preventDefault();

            if (!url){
                Swal.fire('URL é obrigatário');
                setVurl(false);
                return
            } else if (!nome){
                Swal.fire('Nome é obrigatário');
                setVnome(false);
                return
            }else if (!custo){
                Swal.fire('Custo é obrigatário');
                setVcusto(false);
                return
            } else if (!forn) {
                Swal.fire('Fornecedor é obrigatório');
                setVforn(false);
                return
            }else if (!grup){
                Swal.fire('Grupo é obrigatário');
                setVgrup(false);
                return
            }

            await fetch(
                'http://localhost:3333/product',
                {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({
                    "url": url,
                    "nome": nome,
                    "custo": custo,
                    "descricao": descricao,
                    "fornecedor": forn,
                    "grupo": grup,
                    
                  })
                }
            );
            clean();
            Swal.fire('Produto cadastrada com sucesso!');
            

        } catch (error) {
            Swal.fire('Estamos indisponivel, por favor tente novamente mais tarde. Obrigado!')
          }
    };

    const clean = () =>{
        setUrl('');
        setNome('');
        setCusto('');
        setDescricao('');
        setForn('');
        setGrup('');
    }

    useEffect(() => {
        if (url){
            setVurl(true);
        } 
        if (nome){
            setVnome(true);
        }
        if (custo){
            setVcusto(true);
        }
        if (forn){
            setVforn(true);
    
        }
        if (grup){
            setVgrup(true);
        }
    },[url,nome,custo,descricao,forn,grup]);
    

    return (
        <>
            <Header/>
            <div className="contanier_Product">
                    <form className="Form_Product" onSubmit={handleSubmit}>
                        <div className="title_Product">
                            <h1 className="h1_Product">Nova Produto</h1>
                            <div className="but_Product">    
                                <button type="button" className="but1_Product" onClick={clean}>Cancelar</button>
                                <button type="submit" className="but2_Product">Cadastrar</button>
                            </div>
                        </div>
                        <div className="img_product">
                            {url && <img src={url}/>}
                        </div>
                        <div className="item_Product">
                            <label className="campo1_Product">URL da imagem</label>
                        </div>
                        <div className="item_Product">
                            <input 
                                className="campo2_Product" 
                                type="text"
                                value={url} 
                                onChange={(event) => setUrl(event.target.value)}
                                placeholder="Digite URL da imagem..." 
                            />
                        </div>
                        <div className="item_Company">
                            {!vurl && <input type="text" className="val_Product" value='URL é obrigatório' />}
                        </div>
                        <div className="item_Product">
                            <label className="campo1_Product">Nome</label>
                            <label className="campo1_Product">Custo unitário</label>
                        </div>
                        <div className="item_Product">
                            <input 
                                className="campo2_Product" 
                                type="text" 
                                value={nome} 
                                onChange={(event) => setNome(event.target.value)}
                                placeholder="Digite nome do produto..." 
                            />
                            <input 
                                className="campo2_Product" 
                                type="text"
                                value={custo} 
                                onChange={(event) => setCusto(event.target.value)} 
                                placeholder="Digite Custo unitário..." 
                            />
                        </div>
                        <div className="item_Company">
                            {!vnome && <input type="text" className="val1_Product" value='Nome é obrigatório' />}
                            {!vcusto && <input type="text" className="val2_Product" value='Custo é obrigatório' />}
                        </div>
                        <div className="item_Product">
                            <label 
                                className="campo1_Product">Descrição</label>
                        </div>
                        <div className="item_Product">
                            <textarea 
                                rows={5}
                                className="campo2_Product"
                                value={descricao} 
                                onChange={(event) => setDescricao(event.target.value)} 
                                placeholder="Digite sua descrição..." 
                                />
                        </div>
                        <div className="item_Company">
                        </div>
                        <div className="lin_Product"></div>
                        <div className="item_Product">
                            <label className="campo1_Product">Fornecedor</label>
                            <label className="campo1_Product">Grupo</label>
                        </div>
                        <div className="item_Product">
                            <select
                                value={forn}
                                onChange={(event) => setForn(event.target.value)} 
                                className="campo2_Product"
                                id="list_forn">
                                <option selected>Nenhum...</option>        
                            </select>
                            <select
                                value={grup}
                                onChange={(event) => setGrup(event.target.value)}
                                className="campo2_Product"
                                id="list_grup">
                                <option selected>Nenhum...</option>
                            </select>
                        </div>
                        <div className="item_Company">
                            {!vforn && <input type="text" className="val_company" value='Fornecedor é obrigatório' />}
                            {!vgrup && <input type="text" className="val2_company" value='Grupo é obrigatório' />}
                        </div>
                    </form>
                </div>
        </>
    );
};

export default Product;