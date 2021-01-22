import React from 'react';
import {DataTable} from 'react-native-paper';

export function LocationItem({sku, qty1, description}) {
  return (
    <>
      <DataTable.Row style={styles.rowTop}>
        <DataTable.Cell>{sku}</DataTable.Cell>
        <DataTable.Cell numeric style={styles.numericCell}>
          {qty1}
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row style={styles.rowBottom}>
        <DataTable.Cell>{description || 'INVALID'}</DataTable.Cell>
      </DataTable.Row>
    </>
  );
}

const styles = {
  rowTop: {borderBottomWidth: 0},
  rowBottom: {marginTop: -20},
  numericCell: {marginTop: 0},
};
