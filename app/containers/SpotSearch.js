import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SpotSearchActions} from '../modules/SpotSearch';
// import ProcessingModal from '../components/Shared/ProcessingModal';
// import SpotCard from '../components/SpotCard';

class SpotSearch extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>みかん美味すぎワロタwww</Text>
      </View>
    );
  }
}

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
