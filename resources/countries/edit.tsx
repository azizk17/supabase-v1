import { useEffect } from 'react';
import { useForm } from '@pankod/refine-react-hook-form';
import { useSelect } from '@pankod/refine-core';

import { FiLoader } from 'react-icons/fi';
import { FormElement } from '@/components/ui/Input/Input';
import Form from '@/components/ui/Form';

export const CountryEdit: React.FC = () => {
  const {
    refineCore: { onFinish, formLoading, queryResult },
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm();

  // const { options } = useSelect({
  //   resource: 'categories',
  //   defaultValue: queryResult?.data?.data.category.id
  // });

  // useEffect(() => {
  //   resetField('category.id');
  // }, [options]);

  return (
    <div className="container mx-auto">
      <br />
      <Form.Label />
      <Form
        onSubmit={handleSubmit(onFinish)}
        errors={errors}
        loading={formLoading}
      >
        <Form.Item label="Hello">
          <Form.Input
            {...register('title', { required: true })}
            type="text"
            id="title"
            placeholder="Title"
          />
        </Form.Item>

        <div className="mb-6">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Status
          </label>
          <select
            {...register('status')}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
          >
            <option value="published">published</option>
            <option value="draft">draft</option>
            <option value="rejected">rejected</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Category
          </label>
          {/* <select
            defaultValue={''}
            {...register('category.id', { required: true })}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
          >
            <option value={''} disabled>
              Please select
            </option>
            {options?.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select> */}
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              <span className="font-medium">Oops!</span> This field is required
            </p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="mb-2 block text-sm font-medium">
            Content
          </label>
          <textarea
            {...register('content', { required: true })}
            id="content"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
            placeholder="Content"
            rows={10}
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600">
              <span className="font-medium">Oops!</span> This field is required
            </p>
          )}
        </div>
        <button
          type="submit"
          className="flex w-full items-center rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-600 sm:w-auto"
        >
          {formLoading && FiLoader}
          <span>Save</span>
        </button>
      </Form>
    </div>
  );
};
