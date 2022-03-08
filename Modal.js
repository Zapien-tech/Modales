import React from "react";
import { BotonCerrar, ContenedorOverlay, EncabezadoModal, Overlay } from "./styles";

export const Modal = () => {
  return (
    <>
      <Overlay>
          <ContenedorOverlay>
              <EncabezadoModal>
                  <h3>Titulo</h3>
              </EncabezadoModal>

              <BotonCerrar>X</BotonCerrar>
          </ContenedorOverlay>
      </Overlay>
    </>
  );
};
