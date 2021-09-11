export interface CardPropTypes {
    /**
     * Link ou base64 da imagem
     */
    image?: string,
    /**
     * Título do card
     */
    title: string,
    /**
     * Resumo do conteúdo
     */
    description?: string,
    /**
     * Identificador único deste card
     */
    id?: string,
    /**
     * Indica se este card terá uma ação de click
     */
    hasAction: boolean,
    /**
     * Indica se este card terá shadow
     */
    shadow: "sm" | "lg" | "default" | "none",
    /**
     * Função de retorno da ação de click, irá retornoar 2 parametros
     * @param ev elemento clicado
     * @param id identificador único do card
     */
    onActionClick: any
}

const CardPropTypesDefault: CardPropTypes = {
    title: "",
    hasAction: false,
    shadow: "default",
    onActionClick: () => { }
};

export default CardPropTypesDefault;
