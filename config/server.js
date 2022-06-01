module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  vercel: {
    // Required
    token: env('hRZsEFMYNTYWCPi4IzNqrTOM'),
    // Required
    projectId: env('VERCEL_PROJECT_ID'),
    // Optional (required if you use teams)
    teamId: env('prj_RB2XJlqkOoGUwIqsKy9HoBGZKUOM'),
    // Required (hooks)
    triggers: {
        production: env('https://api.vercel.com/v1/integrations/deploy/prj_RB2XJlqkOoGUwIqsKy9HoBGZKUOM/OLEyqbgvgK')
    },
  }
});
