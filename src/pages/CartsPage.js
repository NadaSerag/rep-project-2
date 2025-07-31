import "../styles/cartsPage.css"
 import { useSelector } from 'react-redux';
  import { useDispatch } from 'react-redux';
 import { addToCart, removeFromCart, setCart, deleteCart } from '../features/cart/cartSlice';
 import { useState, useEffect } from 'react';
 import CustomTable from '../components/CustomTable';

function CartsPage( {idOfUser}) {


  const columns=['title', 'price', 'quantity'];

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const cartContent = useSelector((state) => state.cart.array);
  const cartCount = useSelector((state) => state.cart.count);
  const products = useSelector((state) => state.products.array);
  const totalPrice = Number ((useSelector((state) => state.cart.totalPrice)).toFixed(2));

  // getting carts by user with id 5
// fetch('https://dummyjson.com/carts/user/5')
// .then(res => res.json())
// .then(console.log);

 useEffect( () => {
  async function fetchCartFromAPI(){
    try{
      const response = await fetch('https://dummyjson.com/carts/user/1');
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
     const cartObjectFetched = await response.json();
      console.log(cartObjectFetched); //--empty array

      // const cartArrayFetched = cartObjectFetched.carts[0];
   
      // console.log(cartArrayFetched); --undefined since array is empty

      //GIVES ERROR: "Error: Cannot read properties of undefined (reading 'products')"
      //Because an empty array is returned.
     // const cartArrayFetched = cartObjectFetched.carts[0],products;
      //dispatch(setCart(cartArrayFetched));
   // console.log(cartArrayFetched);
    //console.log("array printed");

    } catch (error) { 
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  fetchCartFromAPI();
}, []);

if (loading) {
  return <div className = "loading">Loading...</div>;
 }
if (error) {
  return <div>Error: {error}</div>;
 }

  
 //TABLE PROPS
  const tableHeadlines =["Product", "Price in $", "Quantity"]



  function onDelete(id){
      dispatch(removeFromCart(id));
  };

  const onDeleteALL = async() => {
      const response = await fetch('https://dummyjson.com/carts/1', {
  method: 'DELETE',});
   const data = await response.json();

   //resetting the array in the cart to an empty one
    dispatch(deleteCart(data));
  };

  const cartAddittion = async(event) =>{
      /* adding products in cart with id 1 */

      //finding the product OBJECT chosen by searching to find a matching title

      if(event.target.value === "") //if the "Add to Cart" option itself is selected, don't do anything
        return;
      const productObj = products.find((product) => product.title === event.target.value);

      //productObj.quantity = 1;  //CANT DO THAT AS OBJECT created with Object.freeze() or reeived from API IS IMMUTABLE
      //so must create a shallow copy and edit in it as you want:
      const newProduct = {
        ...productObj,
           quantity: 1
      };

       const response = await fetch('https://dummyjson.com/carts/1', {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              merge: true, // this will include existing products in the cart
              products: [...products, newProduct]

            })
          })
        const data = await response.json();

        // console.log(data);
        console.log(data.products);

        //------------------------------------------------------------------------------------------------
       //dispatch(setCart(data.products));// --Adds the product but also returns the whole new array. 
       //------------------------------------------------------------------------------------------------

       //used this instead
      dispatch(addToCart(newProduct));

        }
  
  return (
    <div>
      <div className = "title">My Cart</div>
      
      {cartCount !== 0 && <button className = "deleteBttn" onClick = {onDeleteALL}> DELETE ALL</button> }
      {/* <button onClick = { cartAddittion }>Add to cart</button> */}
      <select onChange = { cartAddittion }>
        <option value="" className = "addToCartBttn">-- Add to cart --</option>
        {products.map((product) =>
        <option value={product.title}> {product.title}</option>
        )}
      </select>
       <CustomTable
       tableHeadlines = { tableHeadlines }
       content = { cartContent }
       columnsToShow = { columns }
       onDelete = { onDelete }
       yesEdit = { false }
       />
       <h4 className= "total">Total:   {totalPrice} </h4>
    </div>
        );
 }

 export default CartsPage;