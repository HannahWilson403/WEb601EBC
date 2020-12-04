import React from 'react';
import styled from 'styled-components';

const ExampleStyledComponent = styled.div`
       color:${( props ) => props.color};
`;

export const ExampleComponent = () => (
	<ExampleStyledComponent color="red">
	<p> This is an example of using styled components in a React Component </p>
	</ExampleStyledComponent>
);
