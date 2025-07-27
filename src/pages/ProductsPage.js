import CustomForm from '../components/CustomForm';
import CustomTable from '../components/CustomTable';
 import { useDispatch } from 'react-redux';
 import { addProduct } from '../features/products/productsSlice';
  import { removeProduct } from '../features/products/productsSlice';
 import { useForm } from 'react-hook-form';
 import { useSelector } from 'react-redux';

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
  const buttonLabel = "Add Product";
  
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

  return (
    <div>
      <h1>Products</h1>
       <CustomTable tableHeadlines = { tableHeadlines } content = { products } columnsToShow = { columns } onDelete = { onDelete } />
       <CustomForm fields={fields} onSubmit={onSubmission} buttonLabel = { buttonLabel } />
    </div>
  );
 }
 export default ProductsPage;