const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB Connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// Connect to MongoDB
client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB');

    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Define API endpoint to fetch data
    app.get('/api/data', async (req, res) => {
        try {
            const data = await collection.find({}).toArray();
            res.json(data);
        } catch (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
