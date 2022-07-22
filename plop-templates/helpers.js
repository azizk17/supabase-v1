const pluralize = require("pluralize");
const camelCase = require("camelcase");


const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const cleanDescription = (description) => {
  return description.replace(/\r?\n|\r/g, "").trim();
}

const getTypeName = (name) => {
  name = name.substring(name.indexOf(".") + 1);
  return camelCase(pluralize.singular(name), {
    pascalCase: true,
    preserveConsecutiveUppercase: true
  });
}

const getVarsFromString = (str) => {
  var varRegex = /\w+(?=(\s)*(\=))/g;
  var valueRegex = /(?<=(\=)[\s'"]*)\w+/g;

  var varArr = str.match(varRegex);
  var valueArr = str.match(valueRegex);

  let obj = {};
  for (let i in varArr) {
    obj[varArr[i]] = valueArr[i];
  }
  return obj;
}

const isForeignKey = (field) => {
  if (field.description) {
    const { table: resource, column } = getVarsFromString(
      field.description
    );
    if (resource && column) {
      return { resource, column, _type: getTypeName(resource) };
    }
  }

  return false;
}


const generateEnums = (definitions) => {
  let enums = [];
  // eslint-disable-next-line guard-for-in
  for (const def in definitions) {
    for (const prop in definitions[def].properties) {
      if (Object.hasOwnProperty.call(definitions[def].properties, prop)) {
        const element = definitions[def].properties[prop];
        if (element.hasOwnProperty("enum")) {
          // Remove public from enum name
          let name = getTypeName(element.format);
          enums.push({
            name: name,
            values: element.enum,
            format: element.format
          });
        }
      }
    }
  }

  return enums;
}

const getType = (prop) => {
  if (prop.type === "string") {
    const format = prop.format;
    const isEnum = prop.hasOwnProperty("enum");
    const isDate = format.startsWith("timestamp");
    return isEnum
      ? `${getTypeName(format)}`
      : isDate
        ? "Date"
        : "string";
  }

  return prop.type;
}

const getProps = (definition, enums) => {
  const props = definition.properties;
  const requireds = definition.required;

  let arr = [];
  // eslint-disable-next-line guard-for-in
  for (const prp in props) {
    if (Object.hasOwnProperty.call(props, prp)) {
      const element = props[prp];
      const _type = getType(element);
      const _isEnum = enums.find(x => x.name === _type);
      const _isForeignKey = isForeignKey(element);
      let obj = {
        name: prp,
        type: _type,
        ...(requireds && { required: requireds.includes(prp) }),
        //  Attach descriptions if exists
        ...(element.description && {
          description: cleanDescription(element.description)
        }),
        ...(_isEnum && { options: _isEnum.values }),
        ...(element.default && { default: element.default }),
        ...(_isForeignKey && { relation: _isForeignKey })
      };
      arr.push(obj);
    }
  }

  return arr;
}

const selectPropName = (resource) => `${resource}SelectProps`;
const imports = (definition) => {
  let _importTypes = [];
  _importTypes.push(definition.__moduleName);
  // get realated types
  definition.properties.forEach((fi, index) => {
    if (fi.relation) {
      const { resource, _type } = fi.relation;
      _importTypes.push(_type);
    }
    // get enum types
    if (fi.options) {
      _importTypes.push(fi.type);
    }
  });
  return _importTypes.map((t) => t).join(', ');

}


module.exports = {
  capitalizeFirstLetter,
  cleanDescription,
  getTypeName,
  getVarsFromString,
  isForeignKey,
  generateEnums,
  getType,
  getProps,
  selectPropName,
  imports
}