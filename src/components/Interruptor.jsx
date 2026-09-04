import { useState } from 'react';

function Interruptor() {
    const [ligado, setLigado] = useState(false);

    return(
        <button
            className="interruptor"
            onClick={() => setLigado(!ligado)}
            style={{
                backgroundColor: ligado ? 'green' : 'red',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
        >
            {ligado ? 'ON ' : 'OFF ' }
        </button>
    )
}
export default Interruptor;