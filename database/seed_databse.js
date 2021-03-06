const mongoose = require('mongoose');
const { Listings } = require('../database/listings');

//MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/airbnb_plus', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MongoDB Connected!');
    seedAll();
}).catch((err) => {
    console.log('MongoDB Connection Error');
});

//SAMPLE DATA LISTINGS
const listing1 = require('../sample_data/listing1');
const listing2 = require('../sample_data/listing2');
const listing3 = require('../sample_data/listing3');
const listing4 = require('../sample_data/listing4');
const listing5 = require('../sample_data/listing5');
const listing6 = require('../sample_data/listing6');
const listing7 = require('../sample_data/listing7');
const listing8 = require('../sample_data/listing8');
const listing9 = require('../sample_data/listing9');
const listing10 = require('../sample_data/listing10');

const sampleListings = [
    listing1,
    listing2,
    listing3,
    listing4,
    listing5,
    listing6,
    listing7,
    listing8,
    listing9,
    listing10,
];

//SEEDING FUNCTION
async function seedAll(){
    try {
        for(let i=0; i<sampleListings.length; i++){
            const newListing = new Listings(sampleListings[i]);
            await newListing.save();
        }
    } catch (err) {
        throw err;
    } finally {
        console.log(`Successfully Seeded the Database with ${sampleListings.length} listings.`);
        return;
    }
};


