import type { ParameterDocJSON } from "@tsdocgen/core/models/documentation/ParameterDoc";
import React from "react";

type SignatureProps = {
    name: string;
    returnType: string;
    parameters?: ParameterDocJSON[]
}

const Signature: React.FC<SignatureProps> = ({ name, returnType, parameters = [] }) => {
    console.log(parameters);
    return (
        <span>
            {`${name}(): ${returnType}`}
        </span>
    );
}

export default Signature;