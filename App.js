import React from 'react';
import Main from'./app/components/Main';
import { StyleSheet, Text, View } from 'react-native';
import TaskItem from './app/components/TaskItem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
        <TaskItem
          description="Draft 3 ideas for seminar presentation"
          done={new Date()}
          priority={4}
          deadline={new Date(2018,1,23,12)}
          tags={["#brainstorm", "#focus"]}
        />
        <TaskItem
          description="Buy milk"
          done={null}
          priority={4}
          deadline={null}
          tags={["#errand"]}
        />


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});