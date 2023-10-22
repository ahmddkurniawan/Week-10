const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('../routes/MovieRoutes'); 
const userRoutes = require('../routes/UserRoutes');
const multer = require('multer');
const path = require('path');

app.use(bodyParser.json());

app.use('./movies', movieRoutes);
app.use('./users', userRoutes); 

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
});

const upload = multer({ storage: storage });

app.post('/api/movies/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'Berkas berhasil diunggah' });
});

app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
