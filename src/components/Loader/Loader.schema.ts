
export interface LoaderPropTypes {
    /**
     * Indica se o loader será exibido
     */
    isActive: boolean,
    /**
     * Indica se o loader será exibido na página toda
     */
    isPageLoader?: boolean,
    /**
     * Indica se os três pontinhos serão exibidos
     */
    showDots?: boolean,
    /**
     * Selecione uma cor para o texto
     */
    color?: "text-primary" | "text-secondary" | "text-warning" | "text-success" | "text-info" | "text-light",
    /**
     * Selecione uma cor para o fundo
     */
    background?: "bg-primary" | "bg-secondary" | "bg-warning" | "bg-success" | "bg-info" | "bg-light",
    /**
     * Insira a mensagem que será exibida
     */
    message?: string
}

export const LoaderPropTypesDefault: LoaderPropTypes = {
    isActive: false,
    isPageLoader: false,
    showDots: true,
    color: "text-secondary",
    background: "bg-primary",
    message: "PROCESSANDO"
}

