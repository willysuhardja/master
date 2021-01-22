import {Q} from '@nozbe/watermelondb';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import {connect} from 'react-redux';
import {doGetLocationDetail} from '../../features/Location/redux/actions';
import {
  getLoading,
  getLocationDetails,
} from '../../features/Location/redux/getters';

import Screen from './screen';

const ScreenWithDatabase = withDatabase(
  withObservables(
    [],
    ({
      database,
      route: {
        params: {id: locationId},
      },
    }) => {
      return {
        localDetails: database.collections
          .get('scan_items')
          .query(Q.where('location_id', locationId))
          .observe(),
      };
    },
  )(Screen),
);

const mapStateToProps = (state) => {
  return {
    locationLoading: getLoading(state, 'getLocations'),
    details: getLocationDetails(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doGetLocationDetail: (locationName) =>
      dispatch(doGetLocationDetail(locationName)),
  };
};

const connectRedux = connect(mapStateToProps, mapDispatchToProps);

const LocationListDetailScreen = connectRedux(ScreenWithDatabase);

export default LocationListDetailScreen;
