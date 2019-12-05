import { Dispatch, SetStateAction } from 'react';
import firebase from 'firebase/app';
export declare type FirebaseContextProps = {
    firebase: firebase.app.App;
    setFirebase: Dispatch<SetStateAction<firebase.app.App | undefined>>;
    database?: firebase.database.Database;
    setDatabase: Dispatch<SetStateAction<firebase.database.Database | undefined>>;
    firestore?: firebase.firestore.Firestore;
    setFirestore: Dispatch<SetStateAction<firebase.firestore.Firestore | undefined>>;
};
export declare type QueryContextProps = {
    currentRef: firebase.database.Reference | firebase.database.Query;
    setCurrentRef: Dispatch<SetStateAction<firebase.database.Reference | firebase.database.Query | undefined>>;
};
export declare const FirebaseContext: import("react").Context<Partial<FirebaseContextProps>>;
export declare const QueryContext: import("react").Context<Partial<QueryContextProps>>;
