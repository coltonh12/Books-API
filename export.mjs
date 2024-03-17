
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: books1, error } = await supabase
  .from('books1')
  .select('*')

for (let book of books1) {
  let bookList = document.getElementById('books1');
  bookList.innerHTML += `<li>${book.title}</li>`;
}

export default supabase