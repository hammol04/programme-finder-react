var Programme = function(programmeData) {
  this.pid = programmeData.pid;
  this.type = programmeData.type;
  this.title = programmeData.title;
  this.short_synopsis = programmeData.short_synopsis;
  this.is_available = programmeData.is_available;
  this.image_pid = programmeData.image.pid;
  this.first_broadcast_date = programmeData.first_broadcast_date;
};

Programme.prototype.getPid = function() {
  return this.pid;
};

Programme.prototype.getType = function() {
  return this.type;
};

Programme.prototype.getTitle = function() {
  return this.title;
};

Programme.prototype.getShortSynopsis = function() {
  return this.short_synopsis;
};

Programme.prototype.isAvailable = function() {
  return this.is_available;
};

Programme.prototype.getImagePid = function() {
  return this.image_pid;
};

Programme.prototype.getFirstBroadcastDate = function() {
  return this.first_broadcast_date;
};

module.exports = Programme;
