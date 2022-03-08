import styled from 'styled-components';

export const Overlay = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
background: rgba(0,0,0,0.5);
padding: 48px;
display: flex;
justify-content: center;
align-items:center;
`

export const ContenedorOverlay = styled.div`
width:500px;
min-height: 100px;
background: #ffff;
position: relative;
border-radius: 5px;
box-shadow: rgba(100,100,111,0.2) 8px 7px 29px 8px;
padding: 20px;
`
export const EncabezadoModal = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
margin-bottom:20px;
padding-bottom: 20px;
border-bottom: 1px solid #E8E8E8;

h3{
    font-weight:500px;
    font-size:16px;
    color: #1766DC;
    
}
`
export const BotonCerrar = styled.button`
position:absolue;
top:20px;
right:20px;

width:30px;
height:30px;
border:none;
background:none;
cursor: pointer;
transition: 0.3s ease all;
brangroung: #1766DC;

`
