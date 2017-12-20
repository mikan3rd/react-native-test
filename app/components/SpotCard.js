import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, WebView, Linking} from 'react-native';
import Svg, {Use, Image} from 'react-native-svg';

class SpotCard extends React.Component {

    openMap(address) {
        const url = `https://www.google.co.jp/maps?q=${address}`;
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    openPathee(spotId) {
        const url = `https://pathee.com/spots/${spotId}`;
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

  render() {
    console.log(this.props.address);
    const businessHour = this.props.businessHour ? (<Text>{this.props.businessHour}</Text>) : null;
    const building = this.props.building ? (<Text>{this.props.building}</Text>) : null;
    const uri = 'http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser';
    return (
      <View style={styles.spot}>
        <View className="spot__left" style={styles.spotLeft}>
            <TouchableOpacity
                onPress={() => this.openPathee(this.props.spot_id)}
            >
          <Text style={styles.shopName}>{this.props.name}</Text>
          <Text>{this.props.keywords.join(" ")}</Text>
          {businessHour}
          {building}
          <View className="spot__option">
            <View className="spot__option__photo">
              <Text>
                    Pathee: {this.props.photo.original}枚
                    その他: {this.props.photo.other}枚
              </Text>
              <Text />
            </View>
          </View>
          </TouchableOpacity>
        </View>
        <View className="spot__right" style={styles.spotRight}>
          <View className="spot__right__container">
            <View className="spot__right__container__action">
            <TouchableOpacity
                onPress={() => this.openMap(this.props.address)}
            >
                <Text style={styles.mapText}>距離: {this.props.distance}m</Text>
                <Text style={styles.mapText}>地図を表示</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    spot: {
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 10,
    },
    spotLeft: {
    },
    spotRight: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    mapText: {
        fontSize: 20,
        padding: 2,
    },
    shopName: {
        fontSize: 25,
    },
  });

export default SpotCard;
