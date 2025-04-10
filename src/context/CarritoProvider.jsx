import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

export const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CARRITO] Agregar Compra":
        return [...state, action.payload];

      case "[CARRITO] Aumentar Cantidad Compra":
        return state.map((item) => {
          const cant = item.cantidad + 1;
          if (item.id === action.payload) return { ...item, cantidad: cant };
          return item;
        });
      case "[CARRITO] Disminuir Cantidad Compra":
        return state.map((item) => {
          const cant = item.cantidad - 1;
          if (item.id === action.payload && item.cantidad > 1)
            return { ...item, cantidad: cant };
          return item;
        });
      case "[CARRITO] Eliminar Compra":
        return state.filter((compra) => compra.id !== action.payload);

      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[CARRITO] Agregar Compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCompra = (id) => {
    const action = {
      type: "[CARRITO] Aumentar Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCompra = (id) => {
    const action = {
      type: "[CARRITO] Disminuir Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCompra,
        disminuirCompra,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
