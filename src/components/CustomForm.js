import { useForm } from 'react-hook-form';

function CustomForm({ fields, onSubmit, buttonLabel, onEdit, dataToEdit })
{
  const { register, handleSubmit, reset } = useForm();

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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map((field) => (
        <div>
          <input {...register(field.name)}
            type={field.type || 'text'}
            placeholder={field.placeholder || 'Enter ...'}
          />
        </div>
      ))}
      <button type="submit"> { buttonLabel  || "Submit" } </button>
    </form>
  );
};

export default CustomForm;
