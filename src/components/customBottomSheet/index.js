import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Wrapper } from '..';
import { height, width } from 'react-native-dimension';
import { colors } from '../../services';

const CustomBottomSheet = ({ content }) => {
    return (
        <BottomSheet
            // ref={ref => {
            //     this.sheetRef = ref;
            // }}
            onCloseEnd={() => {

            }}
            snapPoints={[height(10), height(50), height(85)]}
            borderRadius={20}
            initialSnap={1}
            renderContent={() => {
                return (
                    <View style={styles.bottomSheetContainer}>
                        <View style={styles.bottomSheetBarThick} />
                        {content}
                    </View>
                );
            }}
        />
    )
}

export { CustomBottomSheet };


const styles = StyleSheet.create({
    bottomSheetContainer: {
        backgroundColor: '#f2f2f6',
        padding: 16,
        height: height(85),
    },
    bottomSheetBarThick: {
        height: 3,
        width: width(10),
        borderRadius: width(15),
        alignSelf: 'center',
        backgroundColor: colors.appBgColor3,
    },
})