function CardTienda(props) {
  const {
    name,
    mark,
    price,
    photo,
    id,
    onAddCart = () => {},
    onViewProduct = () => {},
    onIncrement = () => {},
    onDecrement = () => {},
    isAdded = false,
    quantity = 0,
  } = props;
  return (
    <div className="w-11/12 h-full text-center rounded border-2 border-black mx-auto">
      <img src={photo} alt="" className="h-80 mx-auto" />
      <h3 className="text-primary mt-1 font-mono text-xl font-bold">{name}</h3>
      <h4>S./{price}</h4>
      <h4 className="mt-1 text-sm mb-1">{mark}</h4>
      <a
        onClick={() => onViewProduct(id)}
        className="p-2 bg-primary mb-1 block text-white hover:bg-blue-400 hover:text-black "
      >
        Ver producto
      </a>
      {!isAdded ? (
        <button
          className="p-2 bg-primary block text-white hover:bg-blue-400 hover:text-black w-full"
          onClick={() => onAddCart({ name, mark, price, photo, id })}
        >
          Agregar al carrito
        </button>
      ) : (
        <div className="flex">
          <button
            onClick={() => {
              onDecrement(id, quantity);
            }}
            className=" bg-primary w-20 text-white text-2xl"
          >
            -
          </button>
          <input
            type="text"
            disabled
            value={quantity.quantity}
            className="border rounded p-4 text-center w-full"
          />
          <button
            onClick={() => {
              onIncrement(id);
            }}
            className=" bg-primary w-20 text-white text-2xl"
          >
            +
          </button>
          {console.log(quantity)}
        </div>
      )}
    </div>
  );
}

export { CardTienda };
