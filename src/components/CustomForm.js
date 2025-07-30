import { useForm } from 'react-hook-form';
import "../styles/form.css";
 import { yupResolver } from '@hookform/resolvers/yup';
function CustomForm({ fields, onSubmit, buttonLabel, onEdit, dataToEdit, validationFile })
{
  const { register, handleSubmit, reset,  formState: { errors } } = useForm({
  resolver: yupResolver(validationFile)})

  const handleFormSubmit = (newData) => {
    if (dataToEdit) {
      newData.id = dataToEdit.id; 
      onEdit(newData); // editing
    } else {
      onSubmit(newData); // adding
    } 
    reset(); // clear after submission
  };

 
 return (
  <form className="FORM" onSubmit={handleSubmit(handleFormSubmit)}>
     {fields.map((field) => (
        <div className ="INPUT">
         <input  {...register(field.name)} 
            type={field.type || 'text'}
            placeholder={field.placeholder || 'Enter ...'}
          />
         {errors[field.name] && <p className="error">{errors[field.name].message}</p>}
        </div>
      ))}
    <button type="submit" className = "addBttn">{buttonLabel || "Submit"}</button>
  </form>
);
};

export default CustomForm;





// return(
//  <form className="FORM" style={{ backgroundColor: 'lightgray', padding: '20px' }}>
//   <div className="INPUT" style={{ marginBottom: '10px' }}>
//     <input
//       type="text"
//       placeholder="Test Input - No register"
//       style={{
//         width: '100%',
//         height: '40px',
//         padding: '10px',
//         backgroundColor: 'white',
//         border: '1px solid black',
//         display: 'block'
//       }}
//       id ="1"
//     />
//   </div>
//   <button type="submit">Test Submit</button>
// </form>

// );

//  return (
//   <form className="FORM" onSubmit={handleSubmit(handleFormSubmit)}>
//      {fields.map((field) => (
//         <div className ="INPUT">
//          <input  {...register(field.name)} 
//             type={field.type || 'text'}
//             placeholder={field.placeholder || 'Enter ...'}
//           />
//         </div>
//       ))}
//     <button type="submit">{buttonLabel || "Submit"}</button>
//   </form>
// );