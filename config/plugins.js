module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
    },
    config: {
        deployHook:"https://api.vercel.com/v1/integrations/deploy/prj_RB2XJlqkOoGUwIqsKy9HoBGZKUOM/OLEyqbgvgK",
        apiToken: "hRZsEFMYNTYWCPi4IzNqrTOM",
      },
      upload: {
        config: {
          provider: "strapi-provider-upload-dos",
          providerOptions: {
            key: process.env.DO_SPACE_ACCESS_KEY,
            secret: process.env.DO_SPACE_SECRET_KEY,
            endpoint: process.env.DO_SPACE_ENDPOINT,
            space: process.env.DO_SPACE_BUCKET,
          },
        },
      },
  });