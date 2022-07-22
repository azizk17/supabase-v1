const fs = require("fs");  
const path = require("path"); 
const helpers = require('./plop-templates/helpers.js'); 
const camelCase = require('camelcase');
const fuzzy = require("fuzzy");

const checkboxPlusPrompt = require('inquirer-checkbox-plus-prompt');
// import * as aa from './plop-templates/helpers.mjs';
const handlebarsHelpers = require("handlebars-helpers")();

const loadOpenApiFile = () => {
	const filePath = path.resolve("types", "openapi.json");
	const exists = fs.existsSync(filePath);
	if (!exists) {
		throw new Error(`Error: ${filePath} is invalid or does not exist`);
	}
	let rawdata = fs.readFileSync(filePath);
	const obj = JSON.parse(rawdata)
	let definitions = obj.definitions;
	return definitions
}
const partials = (plop) => {
	// const partialsDir = path.basename + './plop-templates/sub';
	const __dirname = path.resolve();

	const partialsDir = path.join(__dirname, './plop-templates/sub');
	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", partialsDir);
	const filenames = fs.readdirSync(partialsDir);
	filenames.forEach(function (filename) {
		const matches = /^([^.]+).hbs$/.exec(filename);
		if (!matches) {
			return;
		}
		const name = matches[1];
		const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
		plop.setPartial(name, template);
	});
}

function registerHandleBarHelpers(plop) {
	for (const prop in handlebarsHelpers) {
		// if it is not an already included "case" helper, than add the helper to plop
		if (!prop.toLowerCase().includes("case")) {
			plop.setHelper(prop, handlebarsHelpers[prop]);
		}
	}

	// overwrite "raw" helper afterwards, because it's not able to
	// avoid escaping of {{{{raw}}}} block content otherwise
	plop.setHelper("raw", (options) => {
		return options.fn(undefined);
	});
}
const registerHelpers = (plop) => {
	for (const [key, value] of Object.entries(helpers)) {
		plop.setHelper(key, value)
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
const generate = function (plop) {
	// getFields
	// getImports
	// module name
	// resource name (s)
	// i18n key
	plop.setPrompt('checkbox-plus', checkboxPlusPrompt);

	plop.setHelper('getFields', (txt) => txt.toUpperCase());
	plop.setHelper('getImports', (txt) => txt.toUpperCase());
	plop.setHelper('moduleName', (txt) => txt.toUpperCase());
	plop.setHelper('resourceName', (txt) => txt.toUpperCase());
	plop.setHelper('i18nKey', (txt) => txt.toUpperCase());

	plop.setPartial('myTitlePartial', '<h1>{{titleCase name}}</h1>');

	/**
	 *
	 * ## Set Partials & helpers ##
	 * 
	 */
	partials(plop)
	registerHelpers(plop)
	registerHandleBarHelpers(plop)

	// drawer generator
	plop.setGenerator('drawer', {
		description: 'drawer  logic',
		prompts: [
			{
				type: 'checkbox-plus',
				name: "names",
				message: 'resources name please',
				pageSize: 10,
				highlight: true,
				searchable: true,
				source: function (_answersSoFar, input) {
					input = input || '';
					const definitions = loadOpenApiFile();
					return new Promise(function (resolve) {
						var fuzzyResult = fuzzy.filter(input, Object.keys(definitions));
						var data = fuzzyResult.map(function (element) {
							return element.original;
						});
						resolve(data);
					})
				}
			}],
		actions: function (data) {
			let actions = [];
			// console.log("DATA", data);
			let allDefinitions = loadOpenApiFile()

			// If user provided typeName, then only generate that type
			// if (!data.names) {
			// 	throw new Error("You must provide types name");
			// }

			let definitions = Object.keys(allDefinitions).reduce((acc, key) => {
				// console.log("acc", acc);
				// console.log("key", key);
				if (data.names.includes(key)) {
					acc[key] = allDefinitions[key];
				}
				return acc;
			}, {});

			// console.log("Def", definitions);
			// console.log("Names", data.names.length);
			// if (definitions.length !== data.names.length) {
			// 	throw new Error(`Error: Some types do not exist`);
			// }
			const enums = helpers.generateEnums(allDefinitions);
			for (const [moduleName, def] of Object.entries(definitions)) {
				def.__moduleName = helpers.getTypeName(moduleName);
				def.__resource = camelCase(moduleName);
				def.properties = helpers.getProps(def, enums);
			}

			for (let key in definitions) {
				const def = definitions[key]
				// console.log("Should be pushed", def);
				actions.push({
					type: 'add',
					data: def,
					path: `src/resources/${def.__moduleName}/list.tsx`,
					templateFile: 'plop-templates/drawer.hbs'
				});
			}

			return actions;
			// {
			// 	type: 'add',
			// 	path: 'src/resources/{{name}}.tsx',
			// 	templateFile: 'plop-templates/drawer.hbs'
			// }
		}

	});
};


module.exports = generate