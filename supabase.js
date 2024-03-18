import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://vmhdyikknzawqfvslqdl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGR5aWtrbnphd3FmdnNscWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDMxMzEsImV4cCI6MjAyNjAxOTEzMX0.KY21eyLCqGdjd6U7zMtFWHr5mGS0ogAHld1TMK1rLWE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchBooks() {
    try {
        const { data: books, error } = await supabase
            .from('books1')
            .select('*');

        if (error) {
            throw error;
        }

        const booksTableBody = document.getElementById('booksTableBody');

        books.forEach(book => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <!-- Add more table data cells as needed -->
            `;
            booksTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching books:', error.message);
    }
}

fetchBooks();
