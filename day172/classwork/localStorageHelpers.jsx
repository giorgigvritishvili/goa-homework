export const saveUser = (user) => {
    localStorage.setItem('authUser', JSON.stringify(user));
  };
  
  export const getUser = () => {
    return JSON.parse(localStorage.getItem('authUser'));
  };
  