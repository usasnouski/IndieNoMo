export const sendQuery = (search) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search/${search}`,
  })
};
