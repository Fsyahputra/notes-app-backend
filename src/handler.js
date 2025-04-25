const  nanoid  = require('nanoid');
const notes = require('./notes').default;
const dayjs = require('dayjs');


function addNote(request, h){
  const payload = request.payload;
  const id = nanoid.nanoid();
  const createdAt = dayjs().toISOString();
  const updatedAt = createdAt;
  let response;
  const newNote = {
    id,
    ...payload,
    createdAt,
    updatedAt,
  };
  notes.push(newNote);
  const isSuccess = notes.some((note)=> note.id === newNote.id);
  if (isSuccess){
    response = h.response({
      'status': 'success',
      'message': 'Catatan berhasil ditambahkan',
      'data': {
        'noteId': newNote.id,
      },
    });
  } else {
    response = h.response({
      'status': 'fail',
      'message': 'Catatan gagal untuk ditambahkan',
    });
    response.code(500);
  }
  return response;
}

function getAllNotes(request, h){
  const data = {
    'status' : 'success',
    'data' : {
      'notes': notes,
    },
  };
  return h.response(data).code(200);
}

function deleteNote(request, h){
  const payload = request.params;
  const index = notes.findIndex((note) => note.id === payload.id);
  let response;
  if (index !== -1) {
    notes.splice(index, 1);
    response = h.response({
      'status': 'success',
      'message': 'Catatan berhasil dihapus',
    }).code(200);
  } else {
    response = h.response({
      'status': 'fail',
      'message': 'Catatan gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }
  return response;
}

function getNoteByid(request, h){
  const payload = request.params;
  const note = notes.filter((note) => note.id === payload.id)[0];
  let response;
  if (note !== undefined) {
    response = h.response({
      'status' : 'success',
      'data' : {
        'note': note,
      },
    }).code(200);
  } else {
    response = h.response({
      'status': 'fail',
      'message': 'Catatan tidak ditemukan',
    }).code(404);
  }
  return response;
}

function editNoteById(request, h){
  const { id } = request.params;
  const payload = request.payload;
  const index = notes.findIndex((note) => note.id === id);
  let response;
  if (index !== -1){
    notes[index] = {
      ...notes[index],
      ...payload,
      updatedAt: dayjs().toISOString(),
    };
    response = h.response({
      'status': 'success',
      'message': 'Catatan berhasil diperbarui',
    }).code(200);
  } else {
    response = h.response({
      'status': 'fail',
      'message': 'Gagal memperbarui catatan. Id tidak ditemukan',
    }).code(404);
  }
  return response;
};

module.exports = {
  addNote,
  getAllNotes,
  deleteNote,
  getNoteByid,
  editNoteById,
};