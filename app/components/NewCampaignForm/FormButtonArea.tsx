import styled from '@emotion/styled';

import Button from '../Button';

const Container = styled.div`
    margin-top: 40px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`;

export default function FormButtonArea() {

    return (
        <Container>
            <Button
            label={"Previous"}
            style={"tertiery"}
            size={"small"}
            state={"disabled"}
            />
            <Button
            label={"Next"}
            style={"tertiery"}
            size={"small"}
            state={"default"}
            />
        </Container>

    )
}