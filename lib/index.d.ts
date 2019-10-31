/// <reference types="react" />
import useOn from 'hooks/useOn';
import useUpdate from 'hooks/useUpdate';
declare const _default: {
    FirebaseContext: import("react").Context<Partial<import("./context/Firebase").FirebaseContextProps>>;
    FirebaseConsumer: import("react").ExoticComponent<import("react").ConsumerProps<Partial<import("./context/Firebase").FirebaseContextProps>>>;
    FirebaseProvider: import("react").ProviderExoticComponent<import("react").ProviderProps<Partial<import("./context/Firebase").FirebaseContextProps>>>;
    useOn: typeof useOn;
    useUpdate: typeof useUpdate;
};
export default _default;
