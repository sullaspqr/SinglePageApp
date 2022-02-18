import React, { useState, useEffect } from 'react' 
import { NavLink } from 'react-router-dom';

export function InstrumentListPage()
{
    const[instruments, setInstruments] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://kodbazis.hu/api/instruments", { credentials: "include" })
            .then((res) => res.json())
            .then((hangszerek) => setInstruments(hangszerek))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);

    return(
        <div className="p5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
              <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Hangszerek:</h2>
                    {instruments.map((instrument) => (
                        <NavLink key={instrument.id} to={"/hangszer/" + instrument.id}>
                        <div className="card col-sm-3 d-inline-block m-1 p-2">
                         <h5 className="text-muted" >{instrument.brand}</h5>
                         <p className="text-dark">{instrument.name}</p>
                         <div>{instrument.price} ft -</div>
                         <div className="small">Készleten: {instrument.quantity} db</div>
                         <div className="card-body">
                             <img alt={instrument.name}
                                className="img-fluid"
                                style={{maxHeight: 200}}
                                src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"}
                                />
                         </div>
                        </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
}
export default InstrumentListPage;