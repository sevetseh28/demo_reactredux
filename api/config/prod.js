'use strict';

module.exports = {
    env: 'production',
    db: 'mongodb://localhost:27017/toolbox_demo_prod',
    port: process.env.PORT || 5000,
};
