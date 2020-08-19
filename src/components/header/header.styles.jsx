import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ContenedorHeader = styled.div`
    background-color: #f7f9ff;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border-radius: 30px;
    padding: 0 40px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);   
`;

export const ContenedorLogo = styled(Link)`
    height: 100%;
    width: 70px;
    & img {
        height:80px;
    }
`;

export const ContenedorOpciones = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ContenedorAccesoSalida = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-transform: uppercase;
`;

export const LinkOpcion = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;
