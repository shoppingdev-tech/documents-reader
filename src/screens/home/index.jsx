import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const PDFList = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  const getPdfFiles = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      const pdfFilePath = result.uri;
      const pdfFileName = result.name;

      setPdfFiles((prevFiles) => [...prevFiles, { name: pdfFileName, path: pdfFilePath }]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // You can trigger this function on a button press or in your component's lifecycle
    getPdfFiles();
  }, []);

  return (
    <View>
      <Text>List of PDF Files:</Text>
      <FlatList
        data={pdfFiles}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
};

export default PDFList;