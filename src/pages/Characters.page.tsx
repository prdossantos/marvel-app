import axios from "axios";
import classNames from "classnames";
import React, { Fragment, SyntheticEvent, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";
import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Character } from "../schemas/CharacterSchema";


const CharactersPage = () => {
    const history = useHistory();
    const searchInput: any = useRef();
    const [title, setTitle] = useState("");
    const [paginate, setPaginate] = useState({
        count: 20,
        limit: 20,
        offset: 0,
        total: 0,
        page: 0
    });
    const onSearchChange = () => {
        const { value } = searchInput.current;
        setTitle(value);
    }
    const navigateTo = (ev: SyntheticEvent, id: string) => {
        history.push(`/character/${id}`)
    }


    const { isLoading, data } = useQuery(["characters", title, paginate], async () => {
        const response = axios.get(`${process.env.REACT_APP_MARVEL_API_URL}/characters?${title ? `name=${title}` : ""}`, {
            params: {
                apikey: process.env.REACT_APP_MARVEL_KEY,
                offset: !title ? (paginate.count * paginate.page) : 0,
            }
        });
        const { results } = (await response).data.data;
        return results;
    })

    return isLoading ? <Loader isActive={isLoading} isPageLoader /> : <div className="container-fluid">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center pt-4">
                    <Header title="Escolha seu personagem favorito" />
                    <hr />
                    <div className="row">
                        <div className="col-10">
                            <div className="form-floating mb-1">
                                <input type="text" ref={searchInput} defaultValue={title} className="form-control form-control-sm" id="searchInput" placeholder="Buscar por nome do personagem" />
                                <label htmlFor="searchInput">Buscar por nome do personagem</label>
                            </div>
                        </div>
                        <div className="col-2 d-flex align-items-center">
                            <button
                                type="button"
                                onClick={onSearchChange}
                                className="btn btn-primary w-100">Buscar</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {data && data.length > 0 && <Fragment> {data.map((item: Character) =>
                            <div className="col-xs-12 col-sm-3 mb-3" key={`${item.id}`}>
                                <Card
                                    title={item.name}
                                    description={item.description || "Sem descrição"}
                                    id={`${item.id}`}
                                    image={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`}
                                    hasAction={true}
                                    onActionClick={navigateTo}
                                />
                            </div>
                        )}
                            <hr />
                            <nav aria-label="..." className="d-flex justify-content-center mb-3">
                                <ul className="pagination">
                                    <li className={classNames("page-item", {
                                        "disabled": !paginate.offset
                                    })}>
                                        <button className="page-link" onClick={() => setPaginate((prev) => Object.assign({}, prev, { page: prev.page - 1 }))}>Previous</button>
                                    </li>
                                    <li className="page-item">
                                        <button className="page-link" onClick={() => setPaginate((prev) => Object.assign({}, prev, { page: prev.page + 1 }))}>Next</button>
                                    </li>
                                </ul>
                            </nav></Fragment>}

                        {data && !data.length && <div className="col-xs-12 mb-3" ><Card
                            title={"Nenhum personagem encontrado"}
                            description={"Verifique os filtros utilizados"}
                            id={`no-items`}
                        /></div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CharactersPage;
