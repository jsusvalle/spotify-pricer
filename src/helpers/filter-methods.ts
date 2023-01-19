import { Country } from 'models';

// Group by function

export const groupBy = (list: any[], key: string) => {
  return list.reduce(function (r, a) {
    r[a[key]] = r[a[key]] || [];
    r[a[key]].push(a);
    return r;
  }, Object.create(null));
};

// Sorting function

export const sortByHighToLowPrice = (list: Country[]) => {
  return list.sort((a, b) => (a.convertedPrice < b.convertedPrice ? 1 : -1));
};

// get average functions

const getAverageArray = (arr: Country[]) => {
  return (
    arr.reduce((a, { convertedPrice }) => a + convertedPrice, 0) / arr.length
  );
};

export const getAverageOfValues = (regions: any) => {
  // map keys of object (each region)
  return Object.keys(regions).map(region => {
    // get average with function reduce
    return {
      region,
      average: getAverageArray(regions[region]),
    };
  });
};

// Get max and min value functions
const getMin = (data: Country[]) => {
  return data.reduce((previous, current) => {
    return current.convertedPrice < previous.convertedPrice
      ? current
      : previous;
  });
};

const getMax = (data: Country[]) => {
  return data.reduce((previous, current) => {
    return current.convertedPrice > previous.convertedPrice
      ? current
      : previous;
  });
};

export const getMaxAndMinEachRegions = (regions: any) => {
  return Object.keys(regions)
    .map(region => {
      return [getMin(regions[region]), getMax(regions[region])];
    })
    .flat();
};
