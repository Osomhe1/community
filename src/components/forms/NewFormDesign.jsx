/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form'

export default function NewInputDesign({ label, ...rest }) {
  const {
    formState: { errors },
  } = useForm()
  return (
    <div>
      <div className='grid md:grid-cols-[1fr_28rem] gap-10 gap-y-5 items-center border-b py-3 px-5'>
        <h5 className='header_h3 uppercase text-[0.825rem] leading-[1.5] tracking-[2px] '>
          {label}
        </h5>

        <input
          type='text'
          placeholder={label}
          className={`border rounded-md  flex-1  focus:border-transparent 
                          px-2 py-2 ${
                            errors?.title
                              ? 'focus:outline-none focus:ring-1  focus:ring-red-500 border-red-500'
                              : 'border-slate-200 focus:outline-none focus:ring-2'
                          }`}
          {...rest}
        />
      </div>
    </div>
  )
}
