import moment from 'moment';

export const oneYearAhead = d => {
  return moment(d).add(1, 'year');
};

export const oneYearBack = d => {
  return moment(d).subtract(1, 'year');
};

export const tenYearsAhead = d => {
  return moment(d).add(10, 'year');
};

export const tenYearsBack = d => {
  return moment(d).subtract(10, 'year');
};

export const monthHeader = d => {
  return moment(d).format('MMM');
};

export const yearHeader = d => {
  return moment(d).format('YYYY');
};
