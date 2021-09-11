import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import Card from "../components/Card";
import Header from "../components/Header";
import Loader from "../components/Loader";
import CharacterForm from "../forms/CharacterForm";
import { CharacterFormSlice } from "../forms/CharacterForm.slice";
import { getStorageItem } from "../helper";
import { Character } from "../schemas/CharacterSchema";
import { RootState } from "../store";


const CharacterPage = () => {

    const params: any = useParams();
    const [series, setSeries] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const CharacterFormReducer = useSelector((state: RootState) => state.CharacterFormReducer);
    const dispatch = useDispatch();

    const { isLoading, data } = useQuery<Character>("characters", async () => {
        const response = axios.get(`${process.env.REACT_APP_MARVEL_API_URL}/characters/${params?.id}?apikey=${process.env.REACT_APP_MARVEL_KEY}`);
        const { results } = (await response).data.data;
        let item = results.length ? results[0] : {};
        if (item && item.id) {
            item = Object.assign(item, getStorageItem<Character>(`form-character-data-${item.id}`, {}));
        }
        setSeries(item.series.items);
        return item;
    });

    const onFormSubmit = (character: Character) => {
        dispatch(CharacterFormSlice.actions.update(character));
    };

    useEffect(() => {
        if (CharacterFormReducer.status === "done") {
            dispatch(CharacterFormSlice.actions.setStatus("idle"));
            alert("Salvo com sucesso!");
        }
    }, [CharacterFormReducer, dispatch]);

    return isLoading ? <Loader isActive={isLoading} isPageLoader /> : <div className="container-fluid">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center pt-4">
                    <Header
                        title={data?.name}
                        showBackLink
                        showRightButton
                        rightButtonText={showEditForm ? "Modo visualização" : "Modo edição"}
                        onActionClick={() => setShowEditForm(!showEditForm)}
                    />
                    <hr />

                    {showEditForm && <Fragment><div className="row">
                        <h4>Modo ediçao</h4>
                        <CharacterForm defaultValues={data} onSubmit={onFormSubmit} />
                    </div> <hr /></Fragment>}

                    <div className="row">
                        <h4>Séries</h4>
                        {series && series.length > 0 && series.map((serie: any) =>
                            <div className="col-xs-12 mb-3" key={serie?.name}>
                                <Card shadow="sm" title={serie?.name} />
                            </div>
                        )}
                        {series && !series.length && <div className="col-xs-12 mb-3" >
                            <Card shadow="sm" title={"Nenhuma série ainda."} />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default CharacterPage;
