/// <reference types="react" />
import firebase from 'firebase/app';
export declare type AuthContextProps = {
    auth: firebase.auth.Auth;
    uid?: string;
};
export declare const AuthContext: import("react").Context<Partial<AuthContextProps>>;
export declare const AuthProvider: import("react").ProviderExoticComponent<import("react").ProviderProps<Partial<AuthContextProps>>>;
export declare const AuthConsumer: import("react").ExoticComponent<import("react").ConsumerProps<Partial<AuthContextProps>>>;
