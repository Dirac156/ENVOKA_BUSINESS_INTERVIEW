import React from "react";

const Styles = {
    display: 'block',
    width: '100%',
    margin: '1rem 0 5rem'
}

const CopyRight = () => (
    <div style = {Styles} className="copyright">
        &#169; copyright {new Date().getFullYear()}
    </div>
);

export default CopyRight;
