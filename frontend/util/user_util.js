export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const fetchUserInfo = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}/info`
  });
};
