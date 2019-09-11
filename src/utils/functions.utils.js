export const truncateArrayFromObject = (object, array, firstIndex, lastIndex) => {
  const truncatedArray = array.slice(firstIndex, lastIndex);
  return {...object, items: [...truncatedArray]};
};
