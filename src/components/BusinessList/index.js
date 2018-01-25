import { connect } from 'react-redux';
import BusinessList from './BusinessList';

const mapStateToProps = state => {
    return {
    businesses: state.businesses,
    loading: state.loading
}
}

export default connect(mapStateToProps)(BusinessList)