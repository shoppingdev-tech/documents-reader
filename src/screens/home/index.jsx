import React, { useEffect, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import Header from "@src/components/Header";
import { YStack, XStack, Text } from "tamagui";
import { StatusBar } from "react-native";
import AppTheme from "@src/styles/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import SettingsModule from "./SettingsModule";
import RNFS from "react-native-fs";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import FileViewer from 'react-native-file-viewer';
import Pdf from 'react-native-pdf';

const getFileName = (path) => {
  return path.split("/").pop();
};

const formatFileSize = (size) => {
  if (size < 1024) return `${size} bytes`;
  else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
  else if (size < 1073741824) return `${(size / 1048576).toFixed(2)} MB`;
  return `${(size / 1073741824).toFixed(2)} GB`;
};


const openFile = async (file) => {
  try {
    const filePath = `${file.dirPath}/${file.name}`; // Replace with your file path
    await FileViewer.open(filePath);
    console.log('File opened successfully');
  } catch (error) {
    console.error('Error opening file:', error);
  }
};


const fetchFiles = async (dirPath, files) => {
  try {
    const items = await RNFS.readDir(dirPath);
    for (const item of items) {
      if (item.isFile()) {
        files.push({
          name: getFileName(item.path),
          size: item.size,
          mtime: item.mtime,
          dirPath,
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

const App = ({navigation}) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      const fetchedFiles = await getAllFiles();
      setFiles(fetchedFiles);
    };
    getFiles();
  }, []);


  const FirstRoute = () => (
    <View>
      <Item files={files} type="pdf" index={index} />
    </View>
  );

  const SecondRoute = () => (
    <View>
      <Item files={files} type="excel" index={index} />
    </View>
  );
  const ThirdRoute = () => (
    <View>
      <Item files={files} type="word" index={index} />
    </View>
  );

  const FourthRoute = () => (
    <View>
      <Item files={files} type="pp" index={index} />
    </View>
  );

  const renderScene = SceneMap({
    pdf: FirstRoute,
    excel: SecondRoute,
    word: ThirdRoute,
    pp: FourthRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "pdf", title: "PDF" },
    { key: "excel", title: "Excel" },
    { key: "word", title: "Word" },
    { key: "pp", title: "PP" },
  ]);

  const renderTabBar = (props) => (
    <TabBar {...props} style={{ backgroundColor: backgroundColor }} indicatorStyle={{ backgroundColor: AppTheme.colors.white }} />
  );
  const currentTabIndex = routes[index].key;
  let backgroundColor = AppTheme.colors.primary;
  if (currentTabIndex == "excel") {
    backgroundColor = AppTheme.colors.excel;
  } else if (currentTabIndex == "word") {
    backgroundColor = AppTheme.colors.word;
  } else if (currentTabIndex == "pp") {
    backgroundColor = AppTheme.colors.pp;
  }
  console.log('files', files);

  const Item = ({ files, type }) => {
    let filteredFiles = files.filter(file => file.name.endsWith('.pdf'));
    if(type == 'excel'){
      const excelExtensions = ['.xls', '.xlsx', '.xlsm'];
      filteredFiles = files.filter(file =>
        excelExtensions.some(extension => file.name.toLowerCase().endsWith(extension))
      )
    } else if (type == 'word') {
      const wordExtensions = ['.doc', '.docx', '.dotx'];
      filteredFiles = files.filter(file =>
        wordExtensions.some(extension => file.name.toLowerCase().endsWith(extension))
      )
    } else if (type == 'pp') {
      const powerPointExtensions = ['.ppt', '.pptx', '.pptm'];
      filteredFiles =  files.filter(file =>
        powerPointExtensions.some(extension => file.name.toLowerCase().endsWith(extension))
      )
    }
    return (
      <View>
        {
          filteredFiles.map((file) => {
            return (
              <XStack
                key={index}
                padding="$4"
                space="$2"
                borderBottomWidth="$1"
                borderColor={"$borderColor"}
                justifyContent="space-between"
                alignItems="center"
                onPress={() => navigation.navigate('FileView', {
                  file,
                  color: backgroundColor
                })}
              >
                <XStack space="$4" alignItems="center">
                  <FontAwesome
                    name="file-pdf-o"
                    size={30}
                    color={AppTheme.colors.primary}
                  />
                  <YStack width={"80%"}>
                    <Text
                      marginBottom="$1"
                      numberOfLines={1}
                      fontWeight={"bold"}
                      color={"$textPrimary"}
                    >
                      {file.name}
                    </Text>
                    <Text fontSize={12} color={"$grayDarkTextColor"}>
                      {new Date(file.mtime).toLocaleDateString()}{" "}
                      {new Date(file.mtime).toLocaleTimeString()}{" "}
                      {formatFileSize(file.size)}
                    </Text>
                  </YStack>
                </XStack>
                <FontAwesome
                  name="star-o"
                  size={20}
                  color={AppTheme.colors.grayDarkTextColor}
                />
              </XStack>
            )
          })
        }
      </View>
    );
  };

  return (
    <YStack flex={1} backgroundColor={"$snow"}>
      <StatusBar backgroundColor={backgroundColor} />
      <Header backgroundColor={backgroundColor} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </YStack>
  );
};

export default App;
