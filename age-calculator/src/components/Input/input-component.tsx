"use client";
import styled from "styled-components";

interface InputProps {
    className: string,
}

const Input: React.FC<InputProps> = ({ className }) => {
    return(
        <input className={className}/>
    )
}

const StyledInput = styled(Input)`
    width: 100%;
    margin: 10px 10px;
    border: 1px solid rgba(165, 165, 165, 0.86);
    border-radius: 6px;
`

export const InputComponent = () => {
    return(
        <StyledInput className={"input"}/>
    )
}