import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  documentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Document',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  socketId: {
    type: String,
    required: true,
    unique: true
  },
  cursor: {
    position: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      required: true
    }
  },
  isConnected: {
    type: Boolean,
    default: true
  },
  lastPing: {
    type: Date,
    default: Date.now
  },
  connectedAt: {
    type: Date,
    default: Date.now
  }
});

const Session = mongoose.models.Session || mongoose.model('Session', sessionSchema);

export default Session;