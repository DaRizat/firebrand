/// <reference types="react" />
import firebase from 'firebase/app';
export declare type FirebaseContextProps = {
    firebase: firebase.app.App;
    database?: firebase.database.Database;
};
export declare const FirebaseContext: import("react").Context<Partial<FirebaseContextProps>>;
export declare const FirebaseProvider: import("react").ProviderExoticComponent<import("react").ProviderProps<Partial<FirebaseContextProps>>>;
export declare const FirebaseConsumer: import("react").ExoticComponent<import("react").ConsumerProps<Partial<FirebaseContextProps>>>;
