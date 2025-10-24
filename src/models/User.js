import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true },
  avatarColor: { type: String, required: true },
  sessionId: { type: String, required: true, unique: true },
  isGuest: { type: Boolean, default: true },
  lastActive: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
