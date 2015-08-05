Package.describe({
	name: 'ryanwu:meteor-autosize',
	version: '0.0.1',
	summary: 'Automatically adjust textarea height to fit text',
	git: 'https://github.com/ryanhanwu/meteor-autosize.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.add_files('lib/autosize/dist/autosize.js', 'client');
});
