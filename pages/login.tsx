import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import bgImage from '../public/assets/bg_netflix.jpeg'
import netflixLogo from '../public/assets/Netflix_2015_logo.svg'
import useAuth from '../hooks/useAuth';

//TODO: 1:04 day 2
interface Inputs {
  email: string
  password: string
}

function login() {
  const [login, setLogin] = useState(false)
  const {} = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signIn(email, password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={bgImage}
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="/assets/Netflix_2015_logo.svg"
        alt="logo netflix"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>

        <button className="w-full rounded bg-[#e50914] py-3 font-semibold" onClick={() => setLogin(true)} >
          Sign In
        </button>
      </form>

      <div className="text-[gray]">
        New to Netflix ?{' '}
        <button type="submit" className="text-white hover:underline"onClick={() => setLogin(false)} >
          Sign up now
        </button>
      </div>
    </div>
  )
}

export default login
