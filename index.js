
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vmhdyikknzawqfvslqdl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGR5aWtrbnphd3FmdnNscWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDMxMzEsImV4cCI6MjAyNjAxOTEzMX0.KY21eyLCqGdjd6U7zMtFWHr5mGS0ogAHld1TMK1rLWE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchBooksAndDisplay() {
    try {
        const { data: books, error } = await supabase
            .from('books')
            .select('*');

        if (error) {
            console.error('Error fetching books:', error.message);
            return;
        }

        const bookList = document.getElementById('books');
        bookList.innerHTML = ''; // Clear existing content

        books.forEach(book => {
            bookList.innerHTML += `<li>${book.title}</li>`;
        });
    } catch (error) {
        console.error('Error fetching books:', error.message);
    }
}

fetchBooksAndDisplay();
