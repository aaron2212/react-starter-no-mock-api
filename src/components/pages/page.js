import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageHtml = styled.div`
	margin-bottom: 20px;
`;

export const Page = ({ isLoading = false, children }) => {
	let content;

	if (isLoading) {
		content = 'Loading...';
	} else content = children;

	return <PageHtml>{content}</PageHtml>;
};

Page.propTypes = {
	isLoading: PropTypes.bool,
};
