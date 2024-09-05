import React, { useEffect, useState } from 'react';
import './showroom.scss';
import { Helmet } from 'react-helmet';
import { fetchData } from '../../services/api';
import Components from '../../components';

const Showroom = () => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [filteredData, setFilteredData] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const response = await fetchData('/');
    //             setData(response);
    //             setFilteredData(response);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     loadData();
    // }, []);

    // const handleSearch = (event) => {
    //     const searchTerm = event.target.value.toLowerCase();
    //     setSearchTerm(searchTerm);

    //     const filtered = data.filter((item) =>
    //         item.title.toLowerCase().includes(searchTerm)
    //     );
    //     setFilteredData(filtered);
    // };

    // if (loading) {
    //     return (
    //         <Components.Typography name="h1" className="loading">
    //             Loading ...
    //         </Components.Typography>
    //     );
    // }

    // if (error) {
    //     return (
    //         <Components.Typography name="h1" className="error">
    //             Error: {error}
    //         </Components.Typography>
    //     );
    // }

    return (
        <>
            <Helmet>
                <title>Moto - Showroom</title>
            </Helmet>

            <div className="showroom">
                <div className="showroom__context">
                    <div className="showroom__context-search">
                        <Components.Typography name="h1">
                            SEARCH INVENTORY
                        </Components.Typography>

                        <input
                            type="text"
                            placeholder="Search Moto"
                            className="showroom__context-search-input"
                        // value={searchTerm}
                        // onChange={handleSearch}
                        />
                    </div>

                    <div className="showroom__context-cards">
                        {/* {filteredData.map((item) => (
                            <Components.Card
                                key={item.id}
                                img={"image of card"}
                                imgTitle={item.title}
                                title={item.title}
                                type={item.type}
                                price={item.price}
                                stock={item.stock}
                                color={item.color}
                                link={"#"}
                            />
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Showroom;
