const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@cox-matthews-associates/package-global/graphql/fragments/website-section-page');
const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
