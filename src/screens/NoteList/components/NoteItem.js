import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {IconButton, List} from 'react-native-paper';
import {DefaultTheme} from '../../../theme';

export default function NoteItem({
  slug,
  name,
  onPress = () => {},
  onDelete = () => {},
  active,
}) {
  return (
    <List.Item
      style={[
        styles.container,
        active && {backgroundColor: DefaultTheme.colors.accent},
      ]}
      title={name}
      description={slug}
      onPress={onPress}
      right={({color, style}) => (
        <View>
          <IconButton
            icon="delete"
            color={DefaultTheme.colors.error}
            onPress={onDelete}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width - 20,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#facb2899',
  },
});
