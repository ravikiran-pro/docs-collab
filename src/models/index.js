import User from './User.js';
import Document from './Document.js';
import Session from './Session.js';
import Revision from './Revision.js';

export { User, Document, Session, Revision };

export default {
  User,
  Document,
  Session,
  Revision
};

// Export model names as constants
export const MODEL_NAMES = {
  USER: 'User',
  DOCUMENT: 'Document',
  SESSION: 'Session',
  REVISION: 'Revision'
};

// Export collection names
export const COLLECTION_NAMES = {
  USERS: 'users',
  DOCUMENTS: 'documents',
  SESSIONS: 'sessions',
  REVISIONS: 'revisions'
};
