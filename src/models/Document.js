import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  contentType: {
    type: String,
    enum: ['yjs', 'tiptap', 'plain'],
    default: 'yjs'
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  collaborators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  permissions: {
    isPublic: {
      type: Boolean,
      default: false
    },
    allowGuestEdit: {
      type: Boolean,
      default: true
    }
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Document = mongoose.models.Document || mongoose.model('Document', documentSchema);

export default Document;