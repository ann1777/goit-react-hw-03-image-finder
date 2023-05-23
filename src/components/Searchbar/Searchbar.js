import React, { Component } from 'react';
import {
    SearchbarHeader,
    SearchbarForm,
    SearchButton,
    SearchLabel,
    Input,
    InputIcn,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        inputValue: '',
    };

    static propTypes = {
       onSubmit: PropTypes.func.isRequired,
    };

    onInputChange = e => {
        this.setState({
            inputValue: e.target.value,
        });
    };

    resetInput() {
        this.setState({ inputValue: '' });
    }

    render() {
        const { inputValue } = this.state;
        const { onSubmit } = this.props;

        return (
            <SearchbarHeader>
                <SearchbarForm
                className="form"
                onSubmit={e => {
                    e.preventDefault();
                    onSubmit(inputValue);
                    this.resetInput();
                  }}>
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
                    onChange={this.onInputChange}
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
