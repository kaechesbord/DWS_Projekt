import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().min(10).required()
})

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }

  return (
    <div>
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Ime" />
        <p>{errors.name?.message}</p>

        <input {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <textarea {...register("message")} placeholder="Poruka" />
        <p>{errors.message?.message}</p>

        <button type="submit">Pošalji</button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=..." // tvoja lokacija
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title='Google Maps'
      />
    </div>
  )
}