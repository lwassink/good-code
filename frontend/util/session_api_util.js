export const signup = (user, success, error) => {
  $.ajax({
    url: '/api/users',
    type: 'POST',
    success,
    data: { user },
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    url: `api/session`,
    type: 'POST',
    data: { user },
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    url: `api/session`,
    type: 'DELETE',
    success,
    error
  });
};

