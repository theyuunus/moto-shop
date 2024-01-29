import React, { useEffect, useState } from 'react';
import './Showroom.scss';
import axios from 'axios';

export default function Showroom() {
  const [motos, setMotos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6060/motos');
        const data = response.data;
        setMotos(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className='showroom'>
        <section className='showroom-moto_section'>
          <div className='showroom-moto_section-cards' >
            {motos &&
              motos.map((moto) => (
                <div className='showroom-moto_section-cards-card' key={moto.id}>
                <img
                  src={
                    moto.img
                      ? process.env.PUBLIC_URL + '/images/' + moto.img
                      : ''
                  }
                  alt={moto.type}
                  className='showroom-moto_section-cards-card-img'
                />
                <div style={{ "display": 'flex', "paddingTop": '15px' }}>
                  <h3 className='showroom-moto_section-cards-card-h3'>{moto.type}</h3>
                  <p className='showroom-moto_section-cards-card-p'>{moto.status}</p>
                </div>
                <h2 className='showroom-moto_section-cards-card-h2'>{moto.price}</h2>
                <div style={{ "display": 'flex', "gap": '43px' }}>
                  <p className='showroom-moto_section-cards-card-p'>Stock: {moto.stock}</p>
                  <p className='showroom-moto_section-cards-card-p'>{moto.colors}</p>
                </div>
                <button className='showroom-moto_section-cards-card-button'>Details</button>
              </div>
              ))}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
