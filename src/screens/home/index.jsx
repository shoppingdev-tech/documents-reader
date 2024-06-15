import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import RNFS from 'react-native-fs';
import { Button, XGroup, XStack, YStack } from 'tamagui'

const fetchFiles = async (dirPath, files) => {
  try {
    const items = await RNFS.readDir(dirPath);
    for (const item of items) {
      if (item.isFile() && (item.name.endsWith('.pdf') || (item.name.endsWith('.xls') || item.name.endsWith('.xlsx')))) {
        files.push(item.path);
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
  console.log('externalStoragePath', externalStoragePath);
  console.log('files', files);
  await fetchFiles(externalStoragePath, files);

  return files;
};

const App = () => {
  const [files, setFiles] = useState([]);

  const openAllFilesAccessSettings = () => {
    IntentLauncher.startActivity({
      action: 'android.settings.MANAGE_ALL_FILES_ACCESS_PERMISSION',
      data: 'package:com.bucket.list'
    });
  };

  useEffect(() => {
    const getFiles = async () => {
      const fetchedFiles = await getAllFiles();
      setFiles(fetchedFiles);
    };

    getFiles();
  }, []);

  console.log('files', files.length);
  
  return (
    <YStack padding="$3" space="$3">
      <Button color={'red'}>Plain</Button>
      <Button alignSelf="center"  size="$6">
        Large
      </Button>
      <XStack space="$2" justifyContent="center">
        <Button  size="$3" theme="" >
          Active
        </Button>
        <Button size="$3" variant="outlined">
          Outlined
        </Button>
      </XStack>
      <XStack space="$2">
        <Button themeInverse size="$3">
          Inverse
        </Button>
        <Button size="$3">
          iconAfter
        </Button>
      </XStack>
      <XGroup>
        <XGroup.Item>
          <Button width="50%" size="$2" disabled opacity={0.5}>
            disabled
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button width="50%" size="$2" chromeless>
            chromeless
          </Button>
        </XGroup.Item>
      </XGroup>
    </YStack>
  );
};

export default App;