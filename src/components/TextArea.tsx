import styled from "styled-components";


const InputWrapper = styled.div`
  position: relative;
  margin: 16px 0;
  width: 100%;
`;

const StyledInput = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: transparent;
  outline: none;
  white-space: pre-wrap;
  

  &:focus {
    border-color: #007BFF;
  }

  &:focus + label, 
  &:not(:placeholder-shown) + label {
    top:2px;
    font-size: 12px;
    color: #007BFF;
    background-color: inherit;
    padding: 0 3px;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease all;
  color: #aaa;
  pointer-events: none;
`;

export default function TextArea ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLTextAreaElement>) {
    return(
        <InputWrapper>
            <StyledInput 
                placeholder=" " 
                {...props}
            />
            <StyledLabel>{label}</StyledLabel>
    </InputWrapper>
    )
}