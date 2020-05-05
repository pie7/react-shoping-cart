import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { updateSearchInput } from "../reducers/product";

const SearchBarContainer = styled.div`
    position: relative;

    &::before {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        pointer-events: none;
    }

    .search__input {
        font: inherit;
        color: #fff;
        width: 100%;
        border: 0;
        margin: 0;
        display: block;
        min-width: 0;
        background: none;
        box-sizing: content-box;
    }
`

    // &::before {
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     content: "\00a0";
    //     position: absolute;
    //     border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    //     pointer-events: none;
    // }

const SearchBar = ({ updateSearchInput }) => {
    return (
        <SearchBarContainer>
            <input
                type="text"
                className="search__input"
                placeholder="Search..."
                onKeyDown={(e) => updateSearchInput(e)}
            />
        </SearchBarContainer>
    )
}
export default connect(
    state => ({
        searchKeyword: state.product.searchKeyword
    }),
    dispatch => ({
        updateSearchInput: (e) => dispatch(updateSearchInput(e))
    })
)(SearchBar)