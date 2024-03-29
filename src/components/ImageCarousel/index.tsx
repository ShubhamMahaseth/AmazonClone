import React, {useState, useCallback} from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';
import Styles from './styles';

const ImageCarousel = ({images}: {image: [string[]]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View style={Styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[Styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={Styles.dots}>
        {images.map((images, index) => (
          <View
            key={index}
            style={[
              Styles.dot,
              {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
