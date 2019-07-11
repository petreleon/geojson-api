const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
  "UsageClass": { type: String, required: false },
  "CheckoutType": { type: String, required: false },
  "MaterialType": { type: String, required: false },
  "CheckoutYear": { type: String, required: false },
  "CheckoutMonth": { type: String, required: false },
  "Checkouts": { type: String, required: false },
  "Title": { type: String, required: false },
  "Creator": { type: String, required: false },
  "Subjects": { type: String, required: false },
  "Publisher": { type: String, required: false },
  "PublicationYear": { type: String, required: false }
},{strict:false});

const geo = mongoose.model('CollectionName', geoSchema, 'collectionName');

module.exports = geo;