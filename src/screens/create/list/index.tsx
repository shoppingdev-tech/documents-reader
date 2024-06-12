import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@src/redux/hook';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {places} from '@src/constants/list';
import {
  handlePlaces,
  placesData,
  selectedPlacesData,
  setPlaces,
} from '@src/redux/list/slice';

export default function ListScreen() {
  const dispatch = useAppDispatch();
  const chips = useAppSelector(placesData);
  const selectedChips = useAppSelector(selectedPlacesData);
  const navigation = useNavigation();

  useEffect(() => {
    if (!chips.length) {
      dispatch(setPlaces(places)); // Initialize chips if not already set
    }
  }, [dispatch, chips]);

  useEffect(() => {
    dispatch(handlePlaces(selectedChips));
  }, [dispatch, selectedChips]);

  const toggleChipSelection = (chip: string) => {
    if (selectedChips.includes(chip)) {
      dispatch(
        handlePlaces(selectedChips.filter((item: string) => item !== chip)),
      );
    } else {
      dispatch(handlePlaces([...selectedChips, chip]));
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.chipsWrapper}>
          {chips.map((chip: any, index: any) => (
            <TouchableOpacity
              key={index.toString()}
              style={[
                styles.chip,
                selectedChips.includes(chip) && styles.selectedChip,
              ]}
              onPress={() => toggleChipSelection(chip)}>
              <Text
                style={[
                  styles.chipText,
                  selectedChips.includes(chip) && styles.selectedChipText,
                ]}>
                {chip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
