describe('<%= relativePath %>: <%= platform %>', function() {

it('should init', function() {
  browser.get('http://localhost:<%= buildConfig.protractorPort %>/dist/e2e/<%= relativePath %>/index.html?ionicplatform=<%= platform %>&ionicanimate=false&snapshot=true');
});

<%= contents %>

});
