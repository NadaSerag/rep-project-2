import { useForm } from 'react-hook-form';

function CustomForm({ fields, onSubmit, buttonLabel })
{
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
