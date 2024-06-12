import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import AppTheme from '@src/styles/theme';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import {getCurrentLocation, isIOS} from '@src/utils/helpers';

const data = [
  {id: '1', name: 'Item 1'},
  {id: '2', name: 'Item 2'},
  {id: '3', name: 'Item 3'},
];

function HomeScreen(): JSX.Element {
  const navigation = useNavigation<any>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItemSelection = (id: string) => {
    setSelectedItems(prevState =>
      prevState.includes(id)
        ? prevState.filter(item => item !== id)
        : [...prevState, id],
    );
  };

  useEffect(() => {
    askLocationPermission();
  }, []);

  const handleNearItems = async () => {
    const currentLocation = await getCurrentLocation();
    console.info('🚀 ~ handleNearItems ~ currentLocation:', currentLocation);
  };

  const askLocationPermission = () => {
    requestMultiple(
      isIOS()
        ? [
            PERMISSIONS.IOS.LOCATION_ALWAYS,
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          ]
        : [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
    ).then(statuses => {
      if (isIOS()) {
        if (
          statuses['ios.permission.LOCATION_ALWAYS'] === 'granted' ||
          statuses['ios.permission.LOCATION_WHEN_IN_USE'] === 'granted'
        ) {
          handleNearItems();
        } else {
        }
      } else {
        if (statuses['android.permission.ACCESS_FINE_LOCATION'] === 'granted') {
          handleNearItems();
        } else {
        }
      }
    });
  };

  const renderItem = ({item}: {item: {id: string; name: string}}) => (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => toggleItemSelection(item.id)}>
        <Icon
          name={
            selectedItems.includes(item.id)
              ? 'check-box'
              : 'check-box-outline-blank'
          }
          size={24}
          color={AppTheme.colors.primary}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Create', {item})}>
        <Text style={styles.itemName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => {
            navigation.navigate('Create');
            askLocationPermission();
          }}>
          <Icon name="add" size={24} color={AppTheme.colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
