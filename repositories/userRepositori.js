const Users = require('../models/Users');
const Users = require('../models/Users'); // Gantilah dengan model yang sesuai

// Membuat pengguna baru
const createUsers = async (usersData) => {
  try {
    const Users = new Users(usersData);
    return await Users.save();
  } catch (error) {
    throw new Error('Gagal membuat pengguna baru');
  }
};

// Menampilkan daftar pengguna
const listUsers = async () => {
  try {
    return await Users.find();
  } catch (error) {
    throw new Error('Gagal menampilkan daftar pengguna');
  }
};

// Menampilkan detail pengguna berdasarkan ID
const getUserById = async (id) => {
  try {
    return await Users.findById(id);
  } catch (error) {
    throw new Error('Gagal mendapatkan pengguna berdasarkan ID');
  }
};

// Mengupdate pengguna berdasarkan ID
const updateUser = async (id, userData) => {
  try {
    return await Users.findByIdAndUpdate(id, userData, { new: true });
  } catch (error) {
    throw new Error('Gagal mengupdate pengguna');
  }
};

// Menghapus pengguna berdasarkan ID
const deleteUser = async (id) => {
  try {
    return await Users.findByIdAndRemove(id);
  } catch (error) {
    throw new Error('Gagal menghapus pengguna');
  }
};

module.exports = {
  createUsers,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
};
