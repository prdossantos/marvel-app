import { Fragment } from "react";
import classNames from "classnames";
import { LoaderPropTypes, LoaderPropTypesDefault } from "./Loader.schema";


const Loader = (props: LoaderPropTypes) => {

    const { isActive, isPageLoader, background, color, message, showDots } = props;

    return (
        <Fragment>
            <span className={classNames("loader loader-default", {
                "active": isActive,
                "loader-page": isPageLoader
            }, background)}>
                <span className={"icon"}>
                </span>
                <span className="text">
                    <p className={color}>
                        {message}
                        {showDots && <span className="dots">
                            <span className={classNames("dot dot1", color, color?.replace("text-", "bg-"))}></span>
                            <span className={classNames("dot dot2", color, color?.replace("text-", "bg-"))}></span>
                            <span className={classNames("dot dot3", color, color?.replace("text-", "bg-"))}></span>
                        </span>}
                    </p>
                </span>
            </span>
        </Fragment>
    );
};

export default Loader;

Loader.defaultProps = LoaderPropTypesDefault;
