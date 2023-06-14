import styled from '@emotion/styled'

interface ContainerProps {
    label: string
}

const Container = styled.div<ContainerProps>(props => ({
marginTop: props.label === 'Email' ? 32 : 24,
display: 'flex',
flexDirection: 'column',
width: props.label === 'First Name' || props.label === 'Last Name' ? '48.2%' : '100%'

})

);

const Label = styled.span`
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;
color: #35424C;
`;

const Input = styled.input`
margin-top: 6px;
padding: 14px 18px;
border-radius: 8px;
border: 1px solid #E6EAEF;
color: #35424C;
font-family: 'Pretendard';
font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.015em;
text-align: left;


::placeholder {
    color: #8696AB;
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.015em;
    text-align: left;
}
`;

interface props {
    value: string;
    onChangeInput: (value: string) => void;
    label: string;
    placeholder: string;
}

export default function InfoInput({value, onChangeInput, label, placeholder}: props) {
    
    return (
        <Container
        label={label}>
            <Label>{label}</Label>
            <Input
            value={value}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder={placeholder}/>
        </Container>
    )
}