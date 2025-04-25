
routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    }
  },

  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    }
  },

  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About us';
    }
  },

  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    }
  },

  {
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
      return 'API endpoint';
    }
  },

  {
    method: '*',
    path: '/api',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    }
  },

  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    }
  },

  {
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
      const { username = 'stranger' } = request.params;
      const { lang = 'en' } = request.query;
      if (lang === 'id') {
        return `Halo ${username}`;
      }

      if (lang === 'fr') {
        return `Bonjour ${username}`;
      }

      return `Hello ${username}`;
    }
  }
];


module.exports = routes;