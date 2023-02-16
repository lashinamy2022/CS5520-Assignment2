import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Card from '../components/Card';
import CommonStyles from '../styles/CommonStyles';
import Label from '../components/Label';

const EditEntry = () => {
  return (
        <Card customizedStyle={[CommonStyles.purpleLight]}>
        <Label content="Calories:560" customizedStyle={{color: rgb(60,61,132)}}/>
        </Card>
  )
};

export default EditEntry;