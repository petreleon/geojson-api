class GeoController {
  constructor(geoModel) {
    this.geo = geoModel;
  }

  getGeos(query, page, done) {
    let limit = 10;
    this.geos.find(query, done).limit(10).skip(limit * page);
  }

  getAllGeos(query,done) {
    this.geos.find(query, done);
  }

  getGeo(_id, done) {
    //let GeoIns = new this.geos(replace);
    this.geos.findOne({
      _id: _id
    }, done);
  }

  addGeo(geo, done) {
    let GeoIns = new this.geos(geo);
    GeoIns.save(done);
  }

  editGeo(_id, replace, done) {
    //let GeoIns = new this.geos(replace);
    this.geos.findOneAndUpdate({
      _id: _id
    }, replace, {
      upsert: true,
      new: true,
      lean: true
    }, done);
  }

  deleteGeo(_id, done) {
    // create the query by searching for the Geo and remove it
    // then execute the query
    this.geos.find({
        _id: _id
      }).remove()
      .exec(done);
  }
}

module.exports = GeoController;