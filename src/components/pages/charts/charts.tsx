import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from 'components/templates';
import { Graphics } from 'components/organisms';

import { useGetCountries } from 'hooks/endpoints';

import { tabs } from '../../../helpers';

export const ChartsPage = () => {
  const { option } = useParams();

  const optionSelected = useMemo(() => {
    const findTab = tabs.find(x => x.path === option);
    if (Boolean(findTab)) {
      return findTab;
    }

    return tabs[0];
  }, [option]);

  const { data } = useGetCountries();

  return (
    <Layout>
      {data?.data && data?.data.length > 0 && (
        <Graphics
          data={data?.data}
          component={optionSelected?.path}
          title={optionSelected?.title}
          subtitle={optionSelected?.description}
        />
      )}
    </Layout>
  );
};
