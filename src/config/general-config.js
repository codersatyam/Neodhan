// Environment Variables Configuration
const config = {
  // API Endpoints
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000',

  // API Security
  API_KEY: {
    TOKEN: process.env.REACT_APP_API_KEY,
    HEADER_NAME: 'x-api-key'
  },


  // Application Settings
  APP: {
    NAME: process.env.REACT_APP_NAME || 'Neodhan',
    VERSION: process.env.REACT_APP_VERSION || '1.0.0',
    ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || 'development',
    DEBUG_MODE: process.env.REACT_APP_DEBUG_MODE === 'true' || false
  },

  // External Services
  SERVICES: {
    GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GA_ID,
    SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN,
    STRIPE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY
  },

  // File Upload
  UPLOAD: {
    MAX_FILE_SIZE: process.env.REACT_APP_MAX_FILE_SIZE || 5242880, // 5MB
    ALLOWED_FILE_TYPES: process.env.REACT_APP_ALLOWED_FILE_TYPES?.split(',') || 
      ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx']
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE_SIZE: parseInt(process.env.REACT_APP_DEFAULT_PAGE_SIZE) || 10,
    MAX_PAGE_SIZE: parseInt(process.env.REACT_APP_MAX_PAGE_SIZE) || 100
  },

  // Feature Flags
  FEATURES: {
    ENABLE_NOTIFICATIONS: process.env.REACT_APP_ENABLE_NOTIFICATIONS === 'true' || false,
    ENABLE_CHAT: process.env.REACT_APP_ENABLE_CHAT === 'true' || false,
    ENABLE_REPORTS: process.env.REACT_APP_ENABLE_REPORTS === 'true' || false
  },

  WEBSITE_TOKEN_ISSUER: process.env.REACT_APP_WEBSITE_TOKEN_ISSUER,
  WEBSITE_TOKEN_AUDIENCE: process.env.REACT_APP_WEBSITE_TOKEN_AUDIENCE,
  WEBSITE_API_SECRET: process.env.REACT_APP_WEBSITE_API_SECRET,
};

// Freeze the configuration object to prevent modifications
Object.freeze(config);

export default config;
