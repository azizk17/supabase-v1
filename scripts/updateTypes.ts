require('dotenv').config();

var argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
// import openapiTS from 'openapi-typescript';
const path = require('path');
const axios = require('axios');

const b = async () => {
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/?apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;
  const _path = argv.path || 'types/openapi.json';

  try {
    const output = await axios.get(url);
    fs.writeFileSync(path.join(_path), JSON.stringify(output.data));
    console.log('Updated openapi.json');
  } catch (error) {
    console.log('Error: ', error.message);
  }
};
b();

// export default async function handler(req, res) {
//   const openapiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/?apikey=${process.env.NEXT_PUBLIC_SUPABASE_KEY}`;

//   console.log("URL:", openapiUrl);

//   const output = await openapiTS(openapiUrl, {
//     // exportType: true,
//     makePathsEnum: true,

//     formatter: (node) => {
//       if (node.format === "jsonb") {
//         return "unknown";
//       }
//       if (node.format === "ARRAY") {
//         return `${node.type}[]`;
//       }
//       if (node.format === "timestamp with time zone") {
//         return `string | Date`;
//       }
//     },
//   });
//   console.log("node:", output);

//   fs.writeFileSync(path.join("src", "models", "v2", "dto.ts"), output);
//   res.status(200).json({ true: true });
// }
