import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchSearchResults } from '../../actions/actions';

const mapStateToProps = state => ({
    businesses: state.businesses
})

const mapDispatchToProps = dispatch => {
    return {
      onSearch: (term, location, sortBy) => dispatch(fetchSearchResults(term, location, sortBy))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)