export const IsValidDate = (date: string) => {
  const dateObject = new Date(date);

  return (
    !isNaN(dateObject.getTime()) && dateObject.toString() !== 'Invalid Date'
  );
};
