import { StyleSheet } from 'react-native'
import React from 'react'
import { YStack } from 'tamagui';
import Header from '@src/components/Header';
import PdfView from './files/Pdf';

const FileView = ({ route, navigation }) => {
    const { file, color } = route.params;
    const source = { uri: `file://${file.dirPath}/${file.name}`, cache: true };
    return (
        <YStack flex={1}>
            <Header onPress={() => navigation.goBack()} showBackIcon paddingHorizontal="$1" backgroundColor={color} />
            <PdfView
                source={source}

            />
        </YStack>
    )
}


export default FileView