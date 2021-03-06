import React, { Component } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'native-base';
import LiveCard from './LiveCard';

class Live extends Component {
  state = {};

  render() {
    const { main, updateModalValue, navigation } = this.props;
    // console.log('state in mainreducer', main);
    return (
      <Card style={{
        padding: 2,
        height: 260,
        shadowColor: '#fff',
        margin: 5,
        backgroundColor: 'white',
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: 'white'}}>
          <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: '#000', fontWeight: 'bold' }}>Live</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ViewMore', { title: 'Live Products' });
              updateModalValue('viewMoreContent', 'liveProduct');
            }}
          >
            <Text style={{ fontSize: 13, textDecorationLine: 'underline', marginRight: 5, marginLeft: 5, color: '#00B0FF', marginTop: 5, }}>View More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ backgroundColor: 'white', padding: 0, paddingLeft: 0 }}>
          {main.liveProduct.map((product, idx) => <LiveCard key={idx} product={product} {...this.props} />)}
        </ScrollView>
      </Card>
    );
  }
}
export default Live;
Live.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
