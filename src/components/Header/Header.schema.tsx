export interface HeaderPropTypes {
    /**
     * Indica o link de voltar será exibido
     */
	showBackLink: boolean,
    /**
     * Título que será exibido
     */
    title: string,
    /**
     * Indica se o botão de ação irá ser exibido
     */
    showRightButton: boolean,
    /**
     * Texto do botão
     */
    rightButtonText: string,
    /**
     * Identificador que pode ser passado para utilização de retorno na função onActionClick
     */
    id?: string,
    /**
     * Função de retorno da ação de click, irá retornoar 2 parametros
     */
    onActionClick: any,
}

const HeaderPropTypesDefault: HeaderPropTypes = {
	title: "",
    showBackLink: false,
    showRightButton: false,
    rightButtonText: "Editar",
    onActionClick: () => {}
};

export default HeaderPropTypesDefault;
