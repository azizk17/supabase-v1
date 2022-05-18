import React, { useEffect, useState } from 'react';
import {
  useNavigation,
  useTranslate,
  useResourceWithRoute,
  useRouterContext
} from '@pankod/refine-core';
import { ResourceErrorRouterParams } from '@pankod/refine-core';

/**
 * When the app is navigated to a non-existent route, refine shows a default error page.
 * A custom error component can be used for this error page.
 *
 * @see {@link https://refine.dev/docs/api-references/components/refine-config#catchall} for more details.
 */
export const CustomErrorComponent: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const { push } = useNavigation();
  const translate = useTranslate();
  const actionTypes = ['edit', 'create', 'show'];

  const { useParams } = useRouterContext();

  const params = useParams<ResourceErrorRouterParams>();
  const resource = useResourceWithRoute();

  useEffect(() => {
    if (params.resource) {
      const resourceFromRoute = resource(params.resource);
      if (
        params.action &&
        actionTypes.includes(params.action) &&
        !resourceFromRoute[params.action]
      ) {
        setErrorMessage(
          translate(
            'pages.error.info',
            {
              action: params.action,
              resource: params.resource
            },
            `You may have forgotten to add the "${params.action}" component to "${params.resource}" resource.`
          )
        );
      }
    }
  }, [params]);

  return (
    <div className="card w-96 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">404</h2>
        {/* <p>{t('errors.404')}</p> */}
        {translate(
          'pages.error.404',
          'Sorry, the page you visited does not exist.'
        )}
        {errorMessage && <p className=" text-red-500">{errorMessage}</p>}
        <div className="card-actions justify-end">
          <button className="btn btn-ghost" onClick={() => push('/')}>
            {translate('pages.error.backHome', 'Back Home')}
          </button>
        </div>
      </div>
    </div>
  );
};
