import { useState, useEffect } from 'react';
import {MapContainer,TileLayer, Marker, Popup} from 'react-leaflet';
import './style.css';
import Header from '../../components/Header';

/* API Caixas POP-UP DO JAVASCRIPT https://sweetalert2.github.io/#examples */
import Swal from 'sweetalert2';
 
const Home = () => {
 
  const [listCompany, setlistCompany] = useState([]);

  useEffect(() => {
    async function handleGetCompany() {
      try {
        const response = await fetch("http://localhost:3333/company");
        const data = await response.json();

        setlistCompany(data);
        
      } catch (error) {
        Swal.fire('Houve um erro ao tentar consulta de Empresa. Entre em contato com suporte.')
      }
    }
    handleGetCompany();
  }, []);

    return (
            <div className='container-map'>
              <Header/>
                <MapContainer center={[11.405,-0.09]} zoom={3} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {listCompany.map(item => (
                    <Marker position={item.coordinates}>
                        <Popup>
                            {<p>Nome: {item.nome}</p>}
                            {<p>Razão Social: {item.razao}</p>}
                            {<p>CNPJ: {item.cnpj}</p>}
                            {<p>Email: {item.email}</p>}
                        </Popup>
                    </Marker>
                    ))
                }
                </MapContainer>
            </div>
    );
};
export default Home;
