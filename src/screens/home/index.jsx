import React, { useEffect, useState } from 'react';
import Header from '@src/components/Header';
import { YStack, XStack, Text } from 'tamagui';
import { StatusBar } from 'react-native';
import AppTheme from '@src/styles/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SettingsModule from './SettingsModule';
import RNFS from 'react-native-fs';

// Helper function to get the file name from the path
const getFileName = (path) => {
  return path.split('/').pop();
};

// Helper function to format file size
const formatFileSize = (size) => {
  if (size < 1024) return `${size} bytes`;
  else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
  else if (size < 1073741824) return `${(size / 1048576).toFixed(2)} MB`;
  return `${(size / 1073741824).toFixed(2)} GB`;
};

const fetchFiles = async (dirPath, files) => {
  try {
    const items = await RNFS.readDir(dirPath);
    for (const item of items) {
      if (item.isFile() && item.name.endsWith('.pdf')) {
        files.push({
          name: getFileName(item.path),
          size: item.size,
          mtime: item.mtime,
        });
      } else if (item.isDirectory()) {
        await fetchFiles(item.path, files);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

const getAllFiles = async () => {
  const files = [];
  const externalStoragePath = RNFS.ExternalStorageDirectoryPath;
  await fetchFiles(externalStoragePath, files);
  return files;
};

const App = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      const fetchedFiles = await getAllFiles();
      setFiles(fetchedFiles);
    };
    getFiles();
  }, []);

  return (
    <YStack flex={1} backgroundColor={'$snow'}>
      <StatusBar backgroundColor={AppTheme.colors.primary} />
      <Header />
      {files.map((file, index) => (
        <XStack key={index} padding="$4" space="$2" borderBottomWidth="$1" borderColor={'$borderColor'} justifyContent='space-between' alignItems='center'>
          <XStack space="$4" alignItems='center'>
            <FontAwesome name="file-pdf-o" size={30} color={AppTheme.colors.primary} />
            <YStack width={'80%'}>
              <Text marginBottom="$1" numberOfLines={1} fontWeight={'bold'} color={'$textPrimary'}>{file.name}</Text>
              <Text fontSize={12} color={'$grayDarkTextColor'}>
                {new Date(file.mtime).toLocaleDateString()} {new Date(file.mtime).toLocaleTimeString()} {formatFileSize(file.size)}
              </Text>
            </YStack>
          </XStack>
          <FontAwesome name="star-o" size={20} color={AppTheme.colors.grayDarkTextColor} />
        </XStack>
      ))}
    </YStack>
  );
};

export default App;