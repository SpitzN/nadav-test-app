import React from 'react';

const StorageComp = (WrappedComponent) => {
    function storageComp(props) {
        function save(key, data) {
            localStorage.setItem(key, data);
        }
        function load(key) {
            return localStorage.getItem(key);
        }

        return <WrappedComponent
            {...props}
            save={save}
            load={load}
            />;
    }
    return storageComp;
};

export default StorageComp