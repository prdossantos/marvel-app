import classNames from "classnames";
import React from "react";
import CardPropTypesDefault, { CardPropTypes } from "./Card.schema";

const Card = (props: CardPropTypes) => {
    const { title, description, image, id, hasAction, shadow, onActionClick } = props;

    return (
        <div className={classNames("card", {
            "shadow": shadow === "default",
            "shadow-sm": shadow === "sm",
            "shadow-lg": shadow === "lg",
        })} >
            {image && <img src={image} className="card-img-top" alt="" />}
            <div className="card-body">
                <h5 className="card-title text-truncate">{title}</h5>
                {description && <p className="card-text text-truncate" >{description}</p>}
                {hasAction && <button
                    type="button"
                    title={`Show more for ${id}`}
                    onClick={(ev) => onActionClick(ev, id)}
                    className="btn btn-primary">Detalhes</button>
                }
            </div>
        </div>
    );
}

Card.defaultProps = CardPropTypesDefault;

export default Card;
