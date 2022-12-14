import React, { useRef } from 'react';
import {
  Animated,
  FlatList,
  RefreshControl,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { If, Logo } from '~/components';
import { formatDateToCalendar } from '~/utils';

import {
  BoxContent,
  BoxName,
  Date,
  EditIcon,
  FooterLoading,
  ScrollTextContent,
  TextContent,
  TitleContent,
  UserData,
  UserIcon,
  UserName,
  ViewAnimated,
  Wrapper,
} from './styles';

const SPACING = 20;

type Props = {
  hasData: boolean;
  user: User;
  list: Career[];
  isSubmitting: boolean;
  offset: number;
  handleGetCareers: () => Promise<void>;
  handleRefreshCareers: () => Promise<void>;
  handleEditCareer: (career: Career) => void;
};

const Home = ({
  user,
  hasData,
  isSubmitting,
  list,
  offset,
  handleGetCareers,
  handleRefreshCareers,
  handleEditCareer,
}: Props) => {
  const scrollRef = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Wrapper>
      <If condition={hasData}>
        <Animated.FlatList<Career>
          ref={scrollRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={isSubmitting && offset === 0}
              onRefresh={handleRefreshCareers}
            />
          }
          data={list}
          keyExtractor={({ id }) => id.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={handleGetCareers}
          contentContainerStyle={{
            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 30,
          }}
          ListFooterComponent={<FooterLoading />}
          renderItem={({ item }) => (
            <ViewAnimated>
              <BoxContent>
                <UserData>
                  <UserIcon />
                  <BoxName>
                    <UserName>{item.username}</UserName>
                    <TitleContent>{item.title}</TitleContent>
                  </BoxName>
                </UserData>
                <If condition={user.username === item.username}>
                  <TouchableOpacity onPress={() => handleEditCareer(item)}>
                    <EditIcon />
                  </TouchableOpacity>
                </If>
              </BoxContent>
              <ScrollTextContent>
                <TextContent>{item.content}</TextContent>
                <Date>{formatDateToCalendar(item.created_datetime)}</Date>
              </ScrollTextContent>
            </ViewAnimated>
          )}
        />
      </If>
      <If condition={!hasData}>
        <>
          <Logo />
          <FooterLoading />
        </>
      </If>
    </Wrapper>
  );
};

export default Home;
