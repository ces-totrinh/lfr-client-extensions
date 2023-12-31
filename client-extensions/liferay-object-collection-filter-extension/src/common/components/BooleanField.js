import React from 'react';
import ClayDropdown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import ClayForm, {ClayCheckbox} from "@clayui/form";
import './BooleanField.scss';

const BooleanField = ({fieldName, fieldType}) => {

    return (
        <>
            <label>{fieldName}</label>
            <ClayDropdown
                className="dropdown-menu-width-shrink"
                trigger={
                    <ClayButton
                        displayType="secondary"
                        className="bg-light font-weight-normal form-control-select text-left w-100"

                    >
                        {fieldType}
                    </ClayButton>
                }
            >
                <>
                    <ClayForm.Group className="clay-form-group">
                        <ClayCheckbox
                            aria-label="True"
                            label="True"
                        />
                        <ClayCheckbox
                            aria-label="False"
                            label="False"
                        />
                    </ClayForm.Group>
                </>
            </ClayDropdown>
        </>

    )
}
export default BooleanField