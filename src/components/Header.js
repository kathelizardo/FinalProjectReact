import React from 'react';

const Header = () => {
    return (
        <h2 className="ui header">
           <i className="address card icon"></i>
            <div className="content" style={{color: "rgb(55, 124, 124)"}}>
                Agenda de Contato
            <div className="sub header">Familia - Amigos - Trabalho</div>
            </div>
        </h2>
    );
}

export default Header;