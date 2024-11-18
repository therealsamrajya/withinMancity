import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { footballEndpoints } from "../utils/api"

const Fixture = () => {
  const [fixtures, setFixtures] = useState([])
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    fetchFixtures()
  }, [])

  const fetchFixtures = async () => {
    try {
      setLoading(true)  
      const response = await footballEndpoints.getUpcomingMatches()
      // console.log('API Response:', response.data) 
      setFixtures(response.data.matches || [])  
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false)  // End loading
    }
  }

  return (
    <View className="p-4">
      {loading ? (
        <Text>Loading matches...</Text>
      ) : fixtures && fixtures.length > 0 ? (
        fixtures.map((match) => (
          <View key={match.id} className="mb-4 p-4 bg-white border border-gray-200">
            {/* Safely access properties with optional chaining */}
            <Text className="text-base">
              {match?.homeTeam?.name || 'TBD'} vs {match?.awayTeam?.name || 'TBD'}
            </Text>
            
            <Text className="text-sm text-gray-600">
              {match?.utcDate ? new Date(match.utcDate).toLocaleDateString() : 'Date TBD'}
            </Text>

            <Text className="text-sm text-gray-600">
              {match?.competition?.name || 'Competition TBD'}
            </Text>
          </View>
        ))
      ) : (
        <Text>No upcoming matches found</Text>
      )}
    </View>
  )
}

export default Fixture