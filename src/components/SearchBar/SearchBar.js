import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }



    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active';
        }
        else return
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
        if(this.props.businesses.length > 0 && this.state.term && this.state.location) {
            this.props.onSearch(this.state.term, this.state.location, this.state.sortBy);
        }
        else return
    }
    handleTermChange(event) {
        this.setState({term: event.target.value});
    }
    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }
    handleClick(event) {
        console.log(this.props);
        this.props.onSearch(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        return  Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
        return (
        <li 
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
            key={sortByOptionValue}> {sortByOption}
        </li>
            );
        });
    }

    handleKeyDown(event) {
        if (event.keyCode == 13 && this.state.term && this.state.location) {
            this.props.onSearch(this.state.term, this.state.location, this.state.sortBy)
        }
    }

    render() {
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                  {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input onChange={this.handleTermChange} placeholder="Search Businesses" onKeyDown={this.handleKeyDown}/>
              <input onChange={this.handleLocationChange} placeholder="Where?" onKeyDown={this.handleKeyDown}/>
            </div>
            <div className="SearchBar-submit">
              <a onClick={this.handleClick}>Let's Go</a>
            </div>
          </div>
        )
    }
}

export default SearchBar;

