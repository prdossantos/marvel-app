import classNames from "classnames";
import { useHistory } from "react-router";
import HeaderPropTypesDefault, { HeaderPropTypes } from "./Header.schema";

const Header = (props: HeaderPropTypes) => {
    const { title, showBackLink, showRightButton, id, onActionClick, rightButtonText } = props;
    const history = useHistory();

    return (
        <div className={classNames("d-flex flex-row align-items-center", {
            "justify-content-between": showBackLink || showRightButton,
            "justify-content-center": !showBackLink && !showRightButton
        })}>
            {showBackLink && <button type="button" className="btn btn-link" title="Go back" onClick={() => history.goBack()}>Voltar</button>}
            <h4 className="text-truncate mx-3 my-0">{title}</h4>
            {showRightButton && <button
                type="button"
                onClick={(ev) => onActionClick(ev, id)}
                className="btn btn-xs btn-primary">{rightButtonText}</button>
            }
            {!showRightButton && showBackLink ? <span></span> : null}
        </div>
    );
};

Header.defaultProps = HeaderPropTypesDefault;

export default Header;
