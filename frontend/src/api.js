const API_URL = 'http://localhost:5000/api';

export const getProducts = async (search = '', category = '') => {
  const res = await fetch(`${API_URL}/products?search=${search}&category=${category}`);
  return res.json();
};

export const getProduct = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`);
  return res.json();
};