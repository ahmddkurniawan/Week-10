const Movie = require('../models/Movie');

const createMovie = async (movieData) => {
  try {
    const movie = new Movie(movieData);
    return await movie.save();
  } catch (error) {
    throw new Error('Failed to create movie');
  }
};

const listMovies = async () => {
  try {
    return await Movie.find();
  } catch (error) {
    throw new Error('Failed to list movies');
  }
};

const getMovieById = async (id) => {
  try {
    return await Movie.findById(id);
  } catch (error) {
    throw new Error('Failed to get movie by ID');
  }
};

const updateMovie = async (id, movieData) => {
  try {
    return await Movie.findByIdAndUpdate(id, movieData, { new: true });
  } catch (error) {
    throw new Error('Failed to update movie');
  }
};

const deleteMovie = async (id) => {
  try {
    return await Movie.findByIdAndRemove(id);
  } catch (error) {
    throw new Error('Failed to delete movie');
  }
};

module.exports = {
  createMovie,
  listMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
