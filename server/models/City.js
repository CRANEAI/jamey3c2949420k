const mongoose = require("mongoose")

var Schema = new mongoose.Schema({
  id: String,
  createdAt: String,
  updatedAt: String,
  userRef: String,
  additionalType: String,
  alternateName: String,
  description: String,
  image: String,
  name: String,
  sameAs: String,
  url: String,
  address: String,
  aggregateRating: String,
  containedIn: String,
  event: String,
  events: String,
  faxNumber: String,
  geo: String,
  globalLocationNumber: String,
  interactionCount: String,
  isicV4: String,
  logo: String,
  map: String,
  maps: String,
  openingHoursSpecification: String,
  photo: String,
  photos: String,
  review: String,
  reviews: String,
  telephone: String
})

module.exports = mongoose.model("City", Schema)
