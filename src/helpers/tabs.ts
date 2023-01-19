export type tabArgs = {
  path: string;
  title: string;
  description: string;
};

export const tabs: tabArgs[] = [
  {
    path: 'chart_1',
    title: 'Countries price',
    description: 'Bar chart of countries prices',
  },
  {
    path: 'chart_2',
    title: 'Average',
    description: 'Bar chart average regions prices',
  },
  {
    path: 'chart_3',
    title: 'Price by region',
    description: 'Gdp & price comparison (min & max country)',
  },
];
