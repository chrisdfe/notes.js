import reduce from 'lodash/fp/reduce';
import convert from 'lodash/fp/convert';

export const reduceWithKey = convert('reduce', reduce, { cap: false });
