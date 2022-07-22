
const table = () => {

}

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
return _importTypes.map((t) => t).join(', ') ;

}
module.exports = {
    table,
    imports
}