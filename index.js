import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vmhdyikknzawqfvslqdl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGR5aWtrbnphd3FmdnNscWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDMxMzEsImV4cCI6MjAyNjAxOTEzMX0.KY21eyLCqGdjd6U7zMtFWHr5mGS0ogAHld1TMK1rLWE';

// Create Supabase client
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Function to fetch and display books
async function fetchBooks() {
  // Fetch books from Supabase
  const { data: books, error } = await supabase
    .from('Books')
    .select('*');

  // Handle error, if any
  if (error) {
    console.error('Error fetching books:', error.message);
    return;
  }

  // Get reference to the list element
  const bookList = document.getElementById('Books');

  // Clear existing content
  bookList.innerHTML = '';

  // Iterate through books and append them to the list
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`;
    bookList.appendChild(listItem);
  });
}

// Call fetchBooks function when the page is loaded
fetchBooks();
