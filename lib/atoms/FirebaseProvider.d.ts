import React, { FunctionComponent } from 'react';
import firebase from 'firebase/app';
declare type ProviderProps = {
    children: React.ReactNode;
    value: {
        firebase: firebase.app.App;
        database: firebase.database.Database;
    };
};
declare const FirebaseProvider: FunctionComponent<ProviderProps>;
export default FirebaseProvider;
