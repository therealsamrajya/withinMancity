import { View, Text, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import { footballEndpoints } from "../../utils/api"

const Fixture = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchFixtures();
  }, [activeTab]);

  const fetchFixtures = async () => {
    try {
      setLoading(true);
      const response = activeTab === "upcoming" 
        ? await footballEndpoints.getUpcomingMatches() 
        : await footballEndpoints.getCurrentSeasonMatches();
      setFixtures(response.data.matches || []);
      setError(null);
    } catch (error) {
      console.error('API Error:', error);
      setError("Failed to fetch fixtures");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchFixtures();
  };

  const currButton = ({ title, isActive, onPress }) => (
    <Pressable
      onPress={onPress}
      className={`flex-1 py-2 px-4  mb-2 ${isActive ? "bg-highlight" : "bg-secondary"}`}>
      <Text className={`font-poppins text-center ${isActive ? "text-tertiary font-bold" : "text-tertiary"}`}>{title}</Text>
    </Pressable>
  );

  if (loading && !refreshing) {
    return (
      <View className='flex-1 w-full justify-center items-center bg-tertiary'>
        <Image className=" animate-fadePulse w-[40vw] h-[20vh]" source={require("@/assets/images/mancity.png")} />
        <Text className="mt-6 text-secondary text-3xl">Welcome citizens ...</Text>
      </View>
    );
  }

  return (
    <View className='flex-1 bg-primary'>
      <View className='flex-row  bg-primary shadow-sm'>
        {currButton({
          title: "Upcoming",
          isActive: activeTab === "upcoming",
          onPress: () => setActiveTab("upcoming")
        })}
        {currButton({
          title: "Season",
          isActive: activeTab === "season",
          onPress: () => setActiveTab("season")
        })}
      </View>

      {error ? (
        <View className='p-4 m-4 bg-highlight rounded-lg'>
          <Text>{error}</Text>
        </View>
      ) : null}

      <FlatList
        data={fixtures}
        testID='fixture-list'
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: match }) => (
          <View className='mb-4 bg-tertiary rounded-lg shadow-sm border border-primary px-3'>
            <Text className='font-poppins text-sm text-highlight mb-1'>{match.competition.name}</Text>
            <Text className='text-sm text-gray-600 mb-3'>
              {new Date(match.utcDate).toLocaleString('en-US', {
                weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
              })}
            </Text>
            <View className='flex-row items-center justify-between'>
              <View className='flex-1'>
                <Text
                numberOfLines={1}
                ellipsizeMode='tail' className={`text-base ${match.homeTeam.name === "Manchester City FC" ? "font-bold text-secondary" : "text-gray-600 font-bold"}`}>
                  {match.homeTeam.name}
                </Text>
              </View>
              <View className='px-4'>
                <Text className='font-bold text-base text-secondary'>VS</Text>
              </View>
              <View className='flex-1 ml-[1rem] justify-items-end '>
                <Text
                numberOfLines={1}
                ellipsizeMode='tail'
                className={`text-base ${match.awayTeam.name === "Manchester City FC" ? "font-bold text-secondary" : "text-gray-600 font-bold"}`}>
                  {match.awayTeam.name}
                </Text>
              </View>
            </View>
            {match.stage && match.stage !== "REGULAR_SEASON" && (
              <View className='mt-2 bg-gray-50 p-2 rounded'>
                <Text className='font-poppins text-sm text-gray-600'>
                  {match.stage.replace(/_/g, " ")}
                </Text>
              </View>
            )}
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Fixture;
