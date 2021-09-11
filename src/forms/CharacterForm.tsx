import classNames from "classnames";
import { useEffect, useState, useRef } from "react";
import { Character } from "../schemas/CharacterSchema";
import CharacterFormPropTypesDefault, { CharacterFormPropTypes } from "./CharacterForm.schema";

const CharacterForm = (props: CharacterFormPropTypes<Character>) => {
    const { onSubmit, error, defaultValues } = props;
    const [errors, setError] = useState<any>({});

    const nameEl: any = useRef(null);
    const descriptionEl: any = useRef(null);

    const submit = () => {
        const name = nameEl.current.value;
        const description = descriptionEl.current.value;
        if (!name || !description) {
            setError({
                name: !name ? "Campo obrigatório" : null,
                description: !description ? "Campo obrigatório" : null,
            });
            return;
        }
        let data = Object.assign({}, defaultValues);
        onSubmit(Object.assign(data, { name, description }));
    };

    useEffect(() => {
        setError(error !== "");
    }, [error]);

    return (
        <form className={classNames("needs-validation", {
            "was-validated": Object.keys(errors).length
        })}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                <input type="text" ref={nameEl} required defaultValue={defaultValues?.name} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="" />
                {errors.name && <div className="invalid-feedback">
                    {errors.name}
                </div>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                <textarea className="form-control form-control-sm" defaultValue={defaultValues?.description} required ref={descriptionEl} id="exampleFormControlTextarea1" rows={3}></textarea>
                {errors.description && <div className="invalid-feedback">
                    {errors.description}
                </div>}
            </div>


            <div className="col-12">
                <button className="btn btn-primary" type="button" onClick={submit}>Salvar</button>
            </div>
        </form>
    );
};

CharacterForm.defaultProps = CharacterFormPropTypesDefault;

export default CharacterForm;
