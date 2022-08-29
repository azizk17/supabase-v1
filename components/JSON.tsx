import React from 'react'
import { JSONTree } from 'react-json-tree';

const JsonTree = (data) => {
    return (
        <JSONTree data={data} shouldExpandNode={(key) => true } />
    )
}

export default JsonTree