import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSelector, useAppDispatch} from '@src/redux/hook';
import {removeChip, selectedPlacesData} from '@src/redux/list/slice';

const CreateForm = ({navigation}: any) => {
  const [text, setText] = useState<string>('');
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const selectedChipss = useAppSelector(selectedPlacesData);

  const removeChips = (chipToRemove: string) => {
    dispatch(removeChip(chipToRemove));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          value={text}
          onChangeText={setText}
        />
        <Text style={styles.displayText}>{text}</Text>

        <View style={styles.chipsWrapper}>
          {selectedChipss.map((chip: any, index: any) => (
            <View key={index.toString()} style={[styles.chip]}>
              <Text style={[styles.chipText]}>{chip}</Text>
              <TouchableOpacity onPress={() => removeChips(chip)}>
                <Icon name="close-circle" size={20} color="black" />
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('Category')}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateForm;
