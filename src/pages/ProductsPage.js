import CustomForm from '../components/CustomForm';
import CustomTable from '../components/CustomTable';
 import { useDispatch } from 'react-redux';
 import { addProduct, removeProduct, editProduct, setProducts } from '../features/products/productsSlice';
 import { useForm } from 'react-hook-form';
 import { useSelector } from 'react-redux';
 import { useState, useEffect } from 'react';
import "../styles/productsPage.css"
 import { validation } from "../components/YupFormValidation";

 function ProductsPage() {


  const columns=['title', 'price'];
  const products = useSelector((state) => state.products.array);
  //FORM PROPS
  const fields = [
    { name: 'title', placeholder: 'Enter product', type: "text" },
    { name: 'price', placeholder: 'Enter Price', type: 'text' },
  ];

  const { reset} = useForm();
  const dispatch = useDispatch();
  const [productToEdit, setEditProduct] = useState(null);

  const [sort, setSort] = useState("title");
  const [order, setOrder] = useState("asc");

  const handleEditSubmit= async(updatedData) => {
     /* updating title of product with id 1 */
      const response = await fetch(`https://dummyjson.com/products/${updatedData.id}`, {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: updatedData.title,
          price: updatedData.price,
        })
      });
      const data = await response.json();
      //do action with your dataa
      console.log(data);

    dispatch(editProduct(data)); // make sure you have this action
    setEditProduct(null); // exit edit mode
  };

 // const dispatch = useDispatch();
 // useEffect(() => {dispatch(fetchProjects());}, []);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 useEffect( () => {
  async function fetchProjectsFromAPI(){
    try{
      const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const productObjectFetched = await response.json();
      const productArray_Of_30_Fetched = productObjectFetched.products;
   
      dispatch(setProducts(productArray_Of_30_Fetched));

    } catch (error) { //promise rejected
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  fetchProjectsFromAPI();
}, []);

if (loading) {
  return <div className = "loading">Loading...</div>;
 }
if (error) {
  return <div>Error: {error}</div>;
 }

   

//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//    useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) { //promise rejected
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchUsers();
//  }, []);

// if (loading) {
//   return <div>Loading...</div>;
//  }
// if (error) {
//   return <div>Error: {error}</div>;
//  }




  const onSubmission = async(submittedData) => {
      const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
      {title: submittedData.title,
      price:submittedData.price,}
      ),
  });

  // the difference between trusting your own input vs. trusting what the server returns.
  // the server may respond with more data than just what you sent — and that data is usually important.
  // Like the id, A unique id (e.g. id: 101)
  // Timestamps (createdAt)
  // Other auto-generated fields
  // Validation-corrected data

    const data = await response.json();

    //Sending here the data object (product object) to Redux,
    // what if  they align with the state properties?
    dispatch(addProduct(data));

      //adding a slight delay here so that this way, React has a moment to update the table before the alert appears.
    setTimeout(() => {alert("Project Added Successfully!")}, 100);

      //then we're calling reset() inside onSubmit() after dispatching to clear the form fields.
      reset();
  };


 //TABLE PROPS
  const tableHeadlines =["Product Title", "Price in $"]


  // const onDeleteALL = async() => {
  //     const response = await fetch('https://dummyjson.com/carts/1', {
  // method: 'DELETE',});
  //  const data = await response.json();

  //  //resetting the array in the cart to an empty one
  //   dispatch(deleteCart(data));
  // };

  const onDelete = async(id) => {
   const response = await fetch(`https://dummyjson.com/products/${id}`, {method: 'DELETE',})
   const data = await response.json();
   //printing out info claimed from API
  console.log(data.title);
   console.log(data.isDeleted);
   console.log(data.deletedOn);

   //RESPONSE FROM API details include:
// {
//   "id": 1,
//   "title": "Essence Mascara Lash Princess",
//   /* other product data */
//   "isDeleted": true,
//   "deletedOn": /* ISOTime */
// }

//actually removing the product from the array.
    dispatch(removeProduct(id));

  };

  //productu here is the 'item' we give to the function onEdit in CustomTable,
  //where onEdit is a prop we chose to pass as handleEdit here.
  function handleEdit(product) {
    //we set productToEdit to old product.
    setEditProduct(product);
  };

  

  const sortIt = async(sort, order) =>{
    const response = await fetch(`https://dummyjson.com/products?sortBy=${sort}&order=${order}`)
    //const response = await fetch(`https://dummyjson.com/products?sortBy=title&order=asc`)
     const sortedProducts = await response.json();

     console.log(sortedProducts.products);

     //UNDEFINED
     dispatch(setProducts(sortedProducts.products));
  }

  function handleSort(event){
    setSort(event.target.value);
    sortIt(sort, order);
  }

   function handleOrder(event){
    setOrder(event.target.value);
    sortIt(sort, order);
  }


  return (
    
    <div>
      <div className = "title">Products</div>
      {/* <label>
        Sort by:{" "} */}
        <p className = "sortWord">Sort:</p>
        <select onChange={ handleSort }>
          <option value="title">Title</option>
          <option value="price">Price</option>
        </select>
      {/* </label> */}

      {/* <label style={{ marginLeft: "20px" }}>
        Order:{" "} */}
        <select onChange={ handleOrder }>
          {/* Ascending is being registered as desc because they're switched in array */}
          <option value="desc">Ascending</option>
          <option value="asc">Descending</option>
        </select>
      {/* </label> */}

      <div className ="table">
       <CustomTable
       tableHeadlines = { tableHeadlines }
       content = { products }
       columnsToShow = { columns }
       onDelete = { onDelete }
       onEdit = { handleEdit }
       yesEdit = { true }/>
      </div>
      
       <CustomForm
       fields={fields}
       onSubmit={ onSubmission }
       buttonLabel={productToEdit ? "Update Product" : "Add Product"}
       onEdit = { handleEditSubmit }
       dataToEdit={productToEdit}
       validationFile = { validation }/>

    </div>
  );
 }
 export default ProductsPage;