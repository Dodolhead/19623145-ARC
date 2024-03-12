const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware untuk mengizinkan express membaca body JSON dari request
app.use(express.json());

let moviesData = [];

// Fungsi untuk membaca data film dari file JSON
function loadMoviesData() {
    try {
        const data = fs.readFileSync('movies.json', 'utf8');
        moviesData = JSON.parse(data);
    } catch (err) {
        console.error('Error reading movies data:', err);
    }
}

// Fungsi untuk menyimpan data film ke file JSON
function saveMoviesData() {
    try {
        fs.writeFileSync('movies.json', JSON.stringify(moviesData, null, 2));
        console.log('Movies data saved successfully.');
    } catch (err) {
        console.error('Error saving movies data:', err);
    }
}

// Endpoint untuk menampilkan semua film
app.get('/movies', (req, res) => {
    res.json(moviesData);
});

// Endpoint untuk menampilkan film berdasarkan ID
app.get('/movies/:id', (req, res) => {
    const movie = moviesData.find(movie => movie.imdbID === req.params.id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).send('Movie not found');
    }
});

// Endpoint untuk menambahkan film baru
app.post('/movies', (req, res) => {
    const newMovie = req.body;
    moviesData.push(newMovie);
    saveMoviesData();
    res.status(201).send('Movie added successfully');
});

// Endpoint untuk menghapus film berdasarkan ID
app.delete('/movies/:id', (req, res) => {
    const index = moviesData.findIndex(movie => movie.imdbID === req.params.id);
    if (index !== -1) {
        moviesData.splice(index, 1);
        saveMoviesData();
        res.send('Movie deleted successfully');
    } else {
        res.status(404).send('Movie not found');
    }
});

// Endpoint untuk mengupdate film berdasarkan ID
app.put('/movies/:id', (req, res) => {
    const index = moviesData.findIndex(movie => movie.imdbID === req.params.id);
    if (index !== -1) {
        moviesData[index] = req.body;
        saveMoviesData();
        res.send('Movie updated successfully');
    } else {
        res.status(404).send('Movie not found');
    }
});

// Endpoint untuk melakukan pencarian film berdasarkan nama
app.get('/movies/search/:title', (req, res) => {
    const title = req.params.title.toLowerCase();
    const foundMovies = moviesData.filter(movie => movie.Title.toLowerCase().includes(title));
    res.json(foundMovies);
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // Memuat data film saat server dinyalakan
    loadMoviesData();
});

// Simpan data film saat server dimatikan
process.on('SIGINT', () => {
    saveMoviesData();
    process.exit();
});