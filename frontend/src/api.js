export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getProducts = async (search = '', category = '') => {
  const res = await fetch(`${API_URL}/api/products?search=${search}&category=${category}`);
  return res.json();
};

export const getProduct = async (id) => {
  const res = await fetch(`${API_URL}/api/products/${id}`);
  return res.json();
};