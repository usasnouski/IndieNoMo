export const sendQuery = (search) => {
  debugger;
  return $.ajax({
    method: 'GET',
    url: `/api/search/${search}`,
  })
};
