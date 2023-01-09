import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTasks from './Pages/MyTasks/MyTasks';
import Completed from './Pages/Completed/Completed';

import TaskProvider from './Context/provider';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIconStyle: {display: 'none'},
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 15,
                padding: 10,
              },
            }}
            name="MyTasks"
            component={MyTasks}
          />

          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIconStyle: {display: 'none'},
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 15,
                padding: 10,
              },
            }}
            name="Completed"
            component={Completed}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
};

MyTasks.navigationOptions = {
  headerShown: false,
  tabBarIconStyle: {display: 'none'},
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
  },
};
Completed.navigationOptions = {
  headerShown: false,
  tabBarIconStyle: {display: 'none'},
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
  },
};

export default Router;
