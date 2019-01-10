'use strict';

module.exports = (pluginContext) =>{
	const shell = pluginContext.shell;//
	const sites = [
	{
		title: "Torrentz",
		slug: "torrentz",
		url: "http://www.torrentz2.eu/search?f="
	}
	];

	function search(query, res){
		const query_trim = query.trim();

		if(query_trim.length == 0){
			return;
		}

		sites.forEach((site) => {
			res.add({
			id: query_trim,
			payload: site.slug,
			title: site.title,
			desc: `Search ${query_trim} on: ${site.title}`
		});
		});
	}

	function execute(id, payload){
		sites.forEach((site) => {
			if(payload == site.slug){
				shell.openExternal(site.url + id);
			}
			return;
		});
	}
	return { search, execute }
}
