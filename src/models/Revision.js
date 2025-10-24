import mongoose from 'mongoose';

const revisionSchema = new mongoose.Schema({
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
  version: {
    type: Number,
    required: true
  },
  changeType: {
    type: String,
    enum: ['create', 'edit', 'delete', 'restore'],
    required: true
  },
  delta: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Revision = mongoose.models.Revision || mongoose.model('Revision', revisionSchema);

export default Revision;