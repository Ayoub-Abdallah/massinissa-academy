const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    roles: { type: String, required: true, enum: ['superadmin', 'admin'] }
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  module.exports = Admin;
