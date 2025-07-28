import CustomForm from '../components/CustomForm';
import CustomTable from '../components/CustomTable';
 import { useDispatch } from 'react-redux';
 import { addProduct, removeProduct, editProduct } from '../features/products/productsSlice';
 import { useForm } from 'react-hook-form';
 import { useSelector } from 'react-redux';
 import { useState } from 'react';
import "../styles/productsPage.css"

 function ProductsPage() {
 // const dispatch = useDispatch();
 // useEffect(() => {dispatch(fetchProjects());}, []);


  //FORM PROPS
  const fields = [
    { name: 'name', placeholder: 'Enter project', type: "text" },
    { name: 'description', placeholder: 'Description', type: 'text' },
  ];

  const { reset} = useForm()
  const dispatch = useDispatch();
  const [productToEdit, setEditProduct] = useState(null);

  function handleEditSubmit(updatedData) {
    dispatch(editProduct(updatedData)); // make sure you have this action
    setEditProduct(null); // exit edit mode
  };

  function onSubmission(data){

      dispatch(addProduct(data));

      //adding a slight delay here so that this way, React has a moment to update the table before the alert appears.
      setTimeout(() => {alert("Project Added Successfully!")}, 100);

      //then we're calling reset() inside onSubmit() after dispatching to clear the form fields.
      reset();
  };


 //TABLE PROPS
  const tableHeadlines =["ProductName", "Description"]

  const products = useSelector((state) => state.products.array);
  const columns=['name', 'description'];

  function onDelete(id){
      dispatch(removeProduct(id));
  };

  //productu here is the 'item' we give to the function onEdit in CustomTable,
  //where onEdit is a prop we chose to pass as handleEdit here.
  function handleEdit(product) {
    //we set productToEdit to old product.
    setEditProduct(product);
  };

  return (
    <div>
      <div className = "title">Products</div>
       <CustomTable tableHeadlines = { tableHeadlines } content = { products } columnsToShow = { columns } onDelete = { onDelete } onEdit = { handleEdit } />
       <CustomForm fields={fields} onSubmit={ onSubmission } buttonLabel={productToEdit ? "Update Product" : "Add Product"} onEdit = { handleEditSubmit } dataToEdit={productToEdit} />
    </div>
  );
 }
 export default ProductsPage;