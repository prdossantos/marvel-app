export interface CharacterFormPropTypes<T> {
    isLoading?: boolean,
    loadingText?: string,
    defaultValues: T,
    onSubmit: any,
    error: string
}

const CharacterFormPropTypesDefault: CharacterFormPropTypes<any> = {
    isLoading: false,
    loadingText: "loading...",
    onSubmit: () => { },
    defaultValues: {},
    error: ""
};

export default CharacterFormPropTypesDefault;
