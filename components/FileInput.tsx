import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

export type FileInputProps = {
    type?: 'avatar' | 'list'
}

const FileInput: FC<FileInputProps> = ({ type }) => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, open } = useDropzone({
        accept: {
            'image/*': []
        },
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        type == 'avatar' && (
            <div key={file.name} className="h-full w-full">


                <div className=' absolute p-2 z-10  flex justify-center items-end bg-gray-900 bg-opacity-50 h-full w-full '>

                    <div className=' flex space-x-3 items-center justify-center'>
                        <button className=' btn btn-sm btn-outline'>
                            X
                        </button>
                        <button type='button' onClick={open} className=' btn btn-sm btn-outline'>
                            E
                        </button>
                    </div>
                </div>
                <figure><img src={file.preview}
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                    className=" object-cover object-center inset-0 h-28 w-28 "
                /></figure>
                {/* Actions */}


            </div>
        )
        // <div style={thumb} key={file.name}>
        //     <div style={thumbInner}>
        //         <img
        //             src={file.preview}
        //             style={img}
        //             // Revoke data uri after image is loaded
        //             onLoad={() => { URL.revokeObjectURL(file.preview) }}
        //         />
        //     </div>
        // </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);


    return (

        <div className=" relative rounded-lg overflow-hidden w-28 h-28 bg-red-800 shadow-xl">
            {thumbs}
            <div className="card-body">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    {!files.length &&
                        <div className=' h-full w-full hover:cursor-pointer ' onClick={open}>
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    }

                </div>

            </div>
        </div>
        // <section className=" w-36 h-36 bg-red-600 relative  rounded-lg   hover:cursor-pointer hover:bg-base-200">
        //     <div {...getRootProps({ className: 'dropzone' })}>
        //         <input {...getInputProps()} />
        //         {!files.length && <p>Drag 'n' drop some files here, or click to select files</p>}
        //         <aside  >
        //             {thumbs}
        //         </aside>
        //     </div>
        // </section>
    );

}

const Actions = (open) => {

    return (
        <div className=' absolute p-2 z-10  flex justify-center items-end bg-gray-900 bg-opacity-50 h-full w-full '>

            <div className=' flex space-x-3 items-center justify-center'>
                <button className=' btn btn-sm btn-outline'>
                    X
                </button>
                <button type='button' onClick={open} className=' btn btn-sm btn-outline'>
                    E
                </button>
            </div>
        </div>
    )
}
// const actions = () => {}

const Avatar = () => {
    return (
        <div className=' bg-green-500 rounded-lg h-24 w-24'>

        </div>
    )
}


export default FileInput