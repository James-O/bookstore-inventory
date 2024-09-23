const request = require('supertest');
const app = require('../server/index');
const mongoose = require('mongoose');
const Book = require('../server/models/book');

describe('GET /book/:id', () => {
  let testBook;

  beforeEach(async () => {
    testBook = new Book({
      bookTitle: 'Test Book',
      authorName: 'Test Author',
      imageUrl: 'test-image-url',
      category: 'Test Category',
      description: 'Test Description',
      bookPdfUrl: 'test-pdf-url'
    });
    await testBook.save();
  });

  afterEach(async () => {
    await Book.deleteMany({});
    await mongoose.connection.close();
  });

  it('should return a book by its id', async () => {
    const response = await request(app)
      .get(`/book/${testBook._id}`)
      .expect(200);

    expect(response.body.bookTitle).toBe('Test Book');
    expect(response.body.authorName).toBe('Test Author');
    expect(response.body.imageUrl).toBe('test-image-url');
    expect(response.body.category).toBe('Test Category');
    expect(response.body.description).toBe('Test Description');
    expect(response.body.bookPdfUrl).toBe('test-pdf-url');
  });
});