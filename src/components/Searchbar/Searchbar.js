import React, { Component } from 'react';
import {
    SearchbarHeader,
    SearchbarForm,
    SearchButton,
    SearchLabel,
    Input,
    InputIcn,
} from './Searchbar.styled';

class Searchbar extends Component {
    state = {
        inputValue: '',
    };

    render() {
        const { inputValue } = this.state;

        return (
            <SearchbarHeader>
                <SearchbarForm
                className="form">
                    <SearchButton 
                    type="submit"
                    className="button">
                        <SearchLabel
                        className="button-label">
                            Search
                        </SearchLabel>
                    </SearchButton>
                    <InputIcn className="input-icon">🔍</InputIcn>
                    <Input
                    className="input"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={inputValue}
                    />
                </SearchbarForm>
            </SearchbarHeader>
        );
    }
}

export default Searchbar;

/*  <header class="searchbar">
    <form class="form">
        <button type="submit" class="button">
        <span class="button-label">Search</span>
        </button>

        <input
        class="input"
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        />
    </form>
    </header> */
