import React from 'react'

const Sheet2 = () => {
  return (
    <div className=' flex flex-col space-y-2'>
      <div className=' bg-red-300'>
        Header
      </div>
      <div className=' h-full w-full bg-green-400 '>

        {/************ id ************/}
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            <span className='label-text'>
              {t('ResourceName:fields.id', 'id')}
            </span>
          </label>
          <input {...register('id', { required: false })}
            type='text'
            id='id'
            placeholder={t('ResourceName:fields.id', ' id ')}
            className={`input input-bordered w-full max-w-xs ${errors?.id ?? 'input-error'}`}
            disabled={formLoading} />
          {errors?.id && (
            <label className='label text-error'>
              <span className='label-text-alt'>{errors?.id}</span>
            </label>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sheet2