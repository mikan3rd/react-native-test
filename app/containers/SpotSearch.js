import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SpotSearchActions} from '../modules/SpotSearch';
// import ProcessingModal from '../components/Shared/ProcessingModal';
// import SpotCard from '../components/SpotCard';

class SpotSearch extends React.Component {
  componentWillMount() {
    this.props.getCurrentLocation('');
  }
  render() {
    console.log("test", this.props.spotsearch);
    const loading = this.props.spotsearch.loading ? "スポット取得中..." : "";
    return (
      <View style={styles.container}>
        <Image source={require('react-native-test/public/ppap-logo.png')} />
        <Text>{loading}</Text>
      </View>
    );
  }
}

{/* <Text>みかん美味すぎワロタwww</Text> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
