const handlers = require('./handler');
routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: handlers.getAllNotes
  },

  {
    method: 'POST',
    path: '/notes',
    handler: handlers.addNote
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handlers.editNoteById
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handlers.deleteNote
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handlers.getNoteByid
  },
];

module.exports = routes;