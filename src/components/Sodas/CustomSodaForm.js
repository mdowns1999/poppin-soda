import { useState, useRef } from "react";
import classes from "./CustomSodaForm.module.css";
import CheckBoxList from "../UI/CheckBoxList";
import Button from "../UI/Button";
import { useEffect } from "react";
import RadioButton from "../UI/RadioButton";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import SizeSelect from "./SizeSelect";
import QuantitySelect from "./QuantitySelect";
import { useNavigate } from "react-router-dom";
import priceBySize from "../../helper/priceBySize";

const CustomSodaForm = (props) => {
  //Variables
  const [totalCost, setPrice] = useState(0);
  const [SyrupTotal, setSyrupTotal] = useState(0);
  const [sodaTotal, setSodaTotal] = useState(0);
  const [SelectedSodaList, setSodaList] = useState([]);
  const [SelectedSodaType, setSodaID] = useState("");
  const [size, setSize] = useState("8");
  const quantityRef = useRef();
  const cartCtx = useContext(CartContext);
  let navigate = useNavigate();

  //Figure out the total price of the drinks.
  useEffect(() => {
    let sodaTotalWithSize = priceBySize(sodaTotal, size);
    setPrice(SyrupTotal + sodaTotalWithSize);
  }, [totalCost, SyrupTotal, sodaTotal, size]);

  const addtoCartHandler = (event) => {
    event.preventDefault();

    let flavorName = props.sodaList.find((soda) => {
      return soda.id === SelectedSodaType;
    });

    //Add Flavors to Cart CTX and List
    cartCtx.addItem({
      id: "c" + flavorName.id,
      name: "Custom " + flavorName.name,
      amount: +quantityRef.current.value,
      price: totalCost,
      ingredents: {
        baseSoda: flavorName.name,
        ingredents: [SelectedSodaList],
      },
      size: size,
    });

    //Reset the values
    setSodaTotal(0.0);
    setSyrupTotal(0.0);
    setPrice(0.0);
    quantityRef.current.value = "";
    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].checked) {
        event.target[i].checked = null;
      }
    }

    //Navigate away to Products page
    navigate("/products");
  };

  let total = `$${totalCost.toFixed(2)}`;

  return (
    <form className={classes.customForm} onSubmit={addtoCartHandler}>
      <div>
        <h1 className="pageBanner">Soda Flavors:</h1>
        <fieldset>
          <legend>Pick your Soda:</legend>
          <ul>
            {props.sodaList.map((flavor) => (
              <RadioButton
                key={flavor.id}
                id={flavor.id}
                name={"soda-select"}
                value={flavor.price}
                setSelectedValue={setSodaTotal}
                label={flavor.name}
                setSodaID={setSodaID}
              />
            ))}
          </ul>
        </fieldset>
      </div>
      <div>
        <h1 className="pageBanner">Syrup Flavors:</h1>
        <fieldset>
          <legend>Choose your syrups:</legend>
            <CheckBoxList
              list={props.syrupList}
              setSelectedList={setSodaList}
              setTotalValue={setSyrupTotal}/>
        </fieldset>
      </div>

      <div className={classes.quantityBox}>
        <QuantitySelect quantityRef={quantityRef} />
      </div>

      <div className={classes.sizeBox}>
        <SizeSelect setSize={setSize} />
      </div>

      <p>Total Price: {total}</p>

      <div className={classes.btnBox}>
        <Button>Add to Cart</Button>
      </div>
    </form>
  );
};

export default CustomSodaForm;
