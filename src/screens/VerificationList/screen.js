import React, {Fragment, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {
  AppBasicHeader,
  AppContainer,
  AppListFooter,
  AppLoadingBasic,
  AppSearchForm,
} from '../../components';
import screenNames from '../../features/Verification/navigation/screenNames';
import {keyExtractor, refreshControl} from '../../utils/flatlist';
import VerificationItem from './components/VerificationItem';

const Screen = ({
  loading,
  verifications,
  doGetVerifications,
  navigation,
  route,
}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const bootstrap = () => {
      doGetVerifications();
    };

    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (route.params.refresh) {
      doGetVerifications();
      navigation.setParams({
        refresh: false,
      });
    }
  }, [doGetVerifications, navigation, route.params.refresh]);

  const _onVerifiyPressed = (item) => {
    navigation.navigate(screenNames.submit, {
      id: item.id,
      name: item.name,
    });
  };

  const renderItem = ({item}) => (
    <VerificationItem
      disabled={loading}
      title={item.name}
      status={item.status}
      onPress={() => _onVerifiyPressed(item)}
    />
  );

  if (loading && verifications.length === 0) {
    return <AppLoadingBasic />;
  }

  return (
    <Fragment>
      <AppBasicHeader />
      <AppSearchForm
        setSearchResult={setSearchResult}
        setSearchText={setSearchText}
        searchFields={['name']}
        placeholder="Search Location"
        list={verifications}
      />
      <AppContainer containerStyle={styles.container}>
        <FlatList
          contentContainerStyle={{width: '100%'}}
          refreshControl={refreshControl(loading, doGetVerifications)}
          data={searchText.length > 0 ? searchResult : verifications}
          keyExtractor={keyExtractor('verification')}
          renderItem={renderItem}
          ListFooterComponent={<AppListFooter />}
        />
      </AppContainer>
    </Fragment>
  );
};

export default Screen;

const styles = {
  container: {
    marginTop: 20,
  },
};
