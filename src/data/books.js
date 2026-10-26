const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
    description:
      "A philosophical novel about following your dreams and discovering your personal journey.",
    rating: 4.7,
    reviews: 328,
    views: 12400
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    category: "Self Help",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    description:
      "A practical guide to building good habits, breaking bad ones, and making lasting changes.",
    rating: 4.8,
    reviews: 642,
    views: 28700
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 399,
    category: "Finance",
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    description:
      "An exploration of how people think about money, wealth, investing, and financial decisions.",
    rating: 4.6,
    reviews: 415,
    views: 19300
  },
  {
    id: 4,
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    price: 349,
    category: "Self Help",
    image: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg",
    description:
      "A guide to discovering purpose, meaning, and balance through the Japanese concept of Ikigai.",
    rating: 4.5,
    reviews: 286,
    views: 15800
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 299,
    category: "Finance",
    image: "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg",
    description:
      "Lessons about financial literacy, investing, and developing a mindset for building wealth.",
    rating: 4.7,
    reviews: 531,
    views: 24100
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 599,
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg",
    description:
      "Harry Potter discovers the magical world and begins his journey at Hogwarts.",
    rating: 4.9,
    reviews: 1248,
    views: 48600
  },
  {
    id: 7,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 249,
    category: "Classic",
    image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    description:
      "A classic story of wealth, ambition, love, and the American Dream.",
    rating: 4.4,
    reviews: 367,
    views: 14200
  },
  {
    id: 8,
    title: "1984",
    author: "George Orwell",
    price: 279,
    category: "Dystopian",
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    description:
      "A dystopian novel exploring surveillance, control, freedom, and political power.",
    rating: 4.6,
    reviews: 589,
    views: 21800
  },
  {
    id: 9,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 329,
    category: "Romance",
    image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    description:
      "A timeless romance exploring relationships, social expectations, and first impressions.",
    rating: 4.7,
    reviews: 476,
    views: 17900
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 449,
    category: "Fantasy",
    image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
    description:
      "Bilbo Baggins joins an unexpected adventure through Middle-earth.",
    rating: 4.8,
    reviews: 734,
    views: 26300
  },
  {
    id: 11,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 299,
    category: "Self Help",
    image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
    description:
      "A classic personal development book focused on mindset, goals, and achievement.",
    rating: 4.5,
    reviews: 312,
    views: 13700
  },
  {
    id: 12,
    title: "Deep Work",
    author: "Cal Newport",
    price: 429,
    category: "Productivity",
    image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    description:
      "Strategies for developing focused work habits and improving productivity.",
    rating: 4.6,
    reviews: 398,
    views: 16500
  },
  {
    id: 13,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 379,
    category: "Mystery",
    image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
    description:
      "A psychological mystery surrounding a woman who stops speaking after a shocking crime.",
    rating: 4.5,
    reviews: 621,
    views: 27400
  },
  {
    id: 14,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    price: 399,
    category: "Romance",
    image: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg",
    description:
      "A contemporary romance about love, difficult choices, and personal strength.",
    rating: 4.4,
    reviews: 853,
    views: 35100
  },
  {
    id: 15,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 449,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg",
    description:
      "A woman explores alternate versions of her life through a mysterious library.",
    rating: 4.6,
    reviews: 527,
    views: 22900
  },
  {
    id: 16,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 599,
    category: "History",
    image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
    description:
      "An exploration of human history, culture, society, and the development of civilization.",
    rating: 4.7,
    reviews: 693,
    views: 31800
  },
  {
    id: 17,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 499,
    category: "Self Help",
    image: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",
    description:
      "A framework for developing effective habits, leadership skills, and personal growth.",
    rating: 4.6,
    reviews: 447,
    views: 18400
  },
  {
    id: 18,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 799,
    category: "Technology",
    image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    description:
      "A practical guide to writing readable, maintainable, and professional software code.",
    rating: 4.7,
    reviews: 582,
    views: 25600
  },
  {
    id: 19,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    price: 699,
    category: "Technology",
    image: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",
    description:
      "Practical programming principles for becoming a more effective software developer.",
    rating: 4.8,
    reviews: 614,
    views: 27100
  },
  {
    id: 20,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    price: 899,
    category: "Education",
    image: "https://covers.openlibrary.org/b/isbn/9780262046305-L.jpg",
    description:
      "A comprehensive textbook covering algorithms, data structures, and algorithmic techniques.",
    rating: 4.5,
    reviews: 329,
    views: 14800
  },
  {
    id: 21,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    price: 549,
    category: "Design",
    image: "https://covers.openlibrary.org/b/isbn/9780465050659-L.jpg",
    description:
      "An introduction to human-centered design and how everyday objects can be made easier to use.",
    rating: 4.6,
    reviews: 361,
    views: 15200
  },
  {
    id: 22,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 379,
    category: "Fiction",
    image: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
    description:
      "A powerful story about friendship, family, guilt, redemption, and Afghanistan.",
    rating: 4.8,
    reviews: 716,
    views: 29400
  },
  {
    id: 23,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 429,
    category: "Thriller",
    image: "https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg",
    description:
      "A psychological thriller filled with secrets, deception, and unexpected twists.",
    rating: 4.5,
    reviews: 548,
    views: 23700
  },
  {
    id: 24,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    price: 399,
    category: "Science",
    image: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
    description:
      "An accessible exploration of the universe, black holes, time, and modern physics.",
    rating: 4.6,
    reviews: 482,
    views: 20500
  },
  {
    id: 25,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    price: 599,
    category: "Technology",
    image: "https://covers.openlibrary.org/b/isbn/9780321965516-L.jpg",
    description:
      "A practical introduction to usability and creating simple, intuitive websites.",
    rating: 4.7,
    reviews: 294,
    views: 12600
  },
  {
    id: 26,
    title: "Zero to One",
    author: "Peter Thiel",
    price: 449,
    category: "Business",
    image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    description:
      "A business and startup guide focused on innovation, competition, and creating new ideas.",
    rating: 4.5,
    reviews: 385,
    views: 16900
  },
  {
    id: 27,
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 429,
    category: "Historical Fiction",
    image: "https://covers.openlibrary.org/b/olid/OL7429584M-L.jpg",
    description:
      "A moving story about a young girl, books, friendship, and survival during World War II.",
    rating: 4.8,
    reviews: 627,
    views: 28100
  },
  {
    id: 28,
    title: "Educated",
    author: "Tara Westover",
    price: 499,
    category: "Memoir",
    image: "https://covers.openlibrary.org/b/olid/OL26620627M-L.jpg",
    description:
      "A powerful memoir about education, family, identity, and the journey toward self-discovery.",
    rating: 4.7,
    reviews: 453,
    views: 19700
  }
];

export default books;

