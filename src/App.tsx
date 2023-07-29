import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeScreen from './HomeScreen'

const App = () => {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('https://satsurepublic.blob.core.windows.net/test/data.json')
      .then((response) => response.json())
      .then((json) => { console.log(json.data); setData(json.data) })
  }, [])

  return (
    <View>
      <HomeScreen data={data} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})