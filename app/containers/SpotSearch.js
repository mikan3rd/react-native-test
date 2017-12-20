import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SpotSearchActions} from '../modules/SpotSearch';
import ProcessingModal from '../components/Shared/ProcessingModal';
import SpotCard from '../components/SpotCard';

class SpotSearch extends React.Component {

  componentWillMount() {
    this.props.getCurrentLocation('');
  }

  render() {
    console.log("test", this.props.spotsearch);
    const loading = this.props.spotsearch.loading ? "スポット取得中..." : "";
    const {
      spotsearch,
      getCurrentLocation,
    } = this.props;

  	let spotlist = [];
    if (spotsearch.nearspots) {
      spotlist = spotsearch.nearspots.map(
        (spot, index) =>
          <SpotCard
            key={index}
            spot_id={spot.spot_id}
            name={spot.name}
            address={spot.address}
            businessHour={spot.business_hour}
            distance={spot.distance}
            building={spot.building}
            photo={spot.photo}
            keywords={spot.keywords}
          />
      );
    }

    return (
      <View style={styles.spotsearch}>
        <Image
          source={require('react-native-test/public/ppap-logo.png')}
          style={styles.title}
        />
        <Text style={styles.loading}>{loading}</Text>
        <ScrollView>
          {spotlist.map((spot) => spot)}
        </ScrollView>
      </View>
    );
  }
}

{/* <Text>みかん美味すぎワロタwww</Text> */}

const styles = StyleSheet.create({
  spotsearch: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
  },
  loading: {
    fontSize: 30,
  },
});

function mapStateToProps(state, ownProps) {
  return {
    spotsearch: state.spotsearch,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(SpotSearchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotSearch);
