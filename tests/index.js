const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;
const app = require('../index');

describe('Movies', function () {
  describe('GET /search', function () {
    it('should return 200 OK with several movies from search', async () => {
      const response = await request(app)
        .get('/search?filter=Batman&page=1')
        .expect(200)
        .expect('Content-Type', /json/);

      const movies = response.body.data.Search;
      expect(movies).to.be.an('array');
      expect(movies).length.to.be.greaterThan(0);
    });

    it('should have valid movies object', async function () {
      const response = await request(app)
        .get('/search?filter=Batman&page=1')
        .expect(200)
        .expect('Content-Type', /json/);

      const movies = response.body.data.Search;
      expect(movies).to.be.an('array');

      movies.forEach((movie) => {
        expect(movie.Title).to.be.a('string');
        expect(movie.Year).to.be.a('string');
        expect(movie.imdbID).to.be.a('string');
        expect(movie.Type).to.be.a('string');
        expect(movie.Poster).to.be.a('string');
      });
    });
  });
  describe('GET /detail', function () {
    it('should return 200 OK with movie details', async () => {
      const response = await request(app)
        .get('/detail?imdbID=tt0372784')
        .expect(200)
        .expect('Content-Type', /json/);

      const movie = response.body.data;
      expect(movie).to.be.an('object');
      expect(Object.keys(movie)).length.to.be.greaterThan(0);
    });

    it('should have valid movie details object', async function () {
      const response = await request(app)
        .get('/detail?imdbID=tt0372784')
        .expect(200)
        .expect('Content-Type', /json/);

      const movie = response.body.data;
      expect(movie).to.be.an('object');
      
      expect(movie.Title).to.be.a('string')
      expect(movie.Year).to.be.a('string')
      expect(movie.Rated).to.be.a('string')
      expect(movie.Released).to.be.a('string')
      expect(movie.Runtime).to.be.a('string')
      expect(movie.Genre).to.be.a('string')
      expect(movie.Director).to.be.a('string')
      expect(movie.Writer).to.be.a('string')
      expect(movie.Actors).to.be.a('string')
      expect(movie.Plot).to.be.a('string')
      expect(movie.Language).to.be.a('string')
      expect(movie.Country).to.be.a('string')
      expect(movie.Awards).to.be.a('string')
      expect(movie.Poster).to.be.a('string')
      expect(movie.Ratings).to.be.a('array')
      expect(movie.Metascore).to.be.a('string')
      expect(movie.imdbRating).to.be.a('string')
      expect(movie.imdbVotes).to.be.a('string')
      expect(movie.imdbID).to.be.a('string')
      expect(movie.Type).to.be.a('string')
      expect(movie.DVD).to.be.a('string')
      expect(movie.BoxOffice).to.be.a('string')
      expect(movie.Production).to.be.a('string')
      expect(movie.Website).to.be.a('string')
      expect(movie.Response).to.be.a('string')
    });
  });
});
