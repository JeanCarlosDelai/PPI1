import { useForm } from 'react-hook-form';


function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  //console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", { required: true, max: 20, min: 3, maxLength: 80 })} />
      <input type="text" placeholder="Last name" {...register("Last name", { required: true, max: 20, min: 2, maxLength: 100 })} />
      <input type="email" placeholder="Email" {...register("Email", { required: true, max: 19, min: 2 })} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: false, max: 15, min: 7 })} />

      <input type="submit" />
    </form>
  );
}
export default HookForm;
