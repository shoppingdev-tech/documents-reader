import { StyleSheet } from "react-native";
import React from "react";
import Pdf from 'react-native-pdf';

const PdfView = ({ source }) => {
    return (
        <Pdf
            source={source}
            onLoadComplete={(numberOfPages) => {
                // console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page) => {
                // console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                // console.error("Error opening PDF:", error);
            }}
            onPressLink={(uri) => {
                // console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
        />
    );
};

const styles = StyleSheet.create({
    pdf: {
        flex: 1,
        width: '100%',
    },
});

export default PdfView;
