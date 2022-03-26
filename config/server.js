module.exports = ({ env }) => ({
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c5db7e9ad4aebabb8b547f4e99a03711"),
    },
  },
});
