import React from 'react';

class SearchBar extends React.Component{

    state = {term : ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call a callback from parent
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label><i className="search icon"></i> Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;