import React, { Component } from 'react';

import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SubHeadingText from '../../components/UI/SubHeadingText';
import MainText from "../../components/UI/MainText";


class ToolkitHomeScreen extends Component {

  constructor(props) {
      super(props);
      
  }


  handlePressEmergency = () => {
    this.props.navigator.push({
        screen: "strokeAppSp.EmergencyToolkitScreen",
    });
  }
  handlePressMedications = () => {
    this.props.navigator.push({
        screen: "strokeAppSp.MedicationsToolkitScreen",
    });
  }
  handlePressHelpNeeded = () => {
    this.props.navigator.push({
        screen: "strokeAppSp.HelpNeededToolkitScreen",
    });
  }
  handlePressPhysical = () => {
    this.props.navigator.push({
        screen: "strokeAppSp.PhysicalToolkitScreen",
    });
  }
  handlePressSchedule = () => {
    this.props.navigator.push({
        screen: "strokeAppSp.ScheduleToolkitScreen",
    });
  }

  render() {

    return (
      <View style={styles.container}>

                <TouchableOpacity onPress={this.handlePressHelpNeeded}>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name="ios-people" size={30} md="md-people"></Icon>    
                        <MainText>
                            <SubHeadingText style={styles.title}>
                                Formulario Ayuda Necesaria
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handlePressSchedule}>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name="md-calendar" size={30} md="md-calendar"></Icon>    
                        <MainText>
                            <SubHeadingText style={styles.title}>
                                Formulario Horario Semanal  
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handlePressMedications}>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name="ios-medkit" size={30} md="md-medkit"></Icon>    
                        <MainText>
                            <SubHeadingText style={styles.title}>
                                Formulario Medicaciones  
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handlePressPhysical}>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name="ios-bicycle" size={30} md="md-bicycle"></Icon>    
                        <MainText>
                            <SubHeadingText style={styles.title}>
                                Formulario Terapia Física  
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity> 

                <TouchableOpacity onPress={this.handlePressEmergency}>
                    <View style={styles.item}>
                        <Icon style={styles.icon} name="ios-warning" size={30} md="md-warning"></Icon>    
                        <MainText>
                            <SubHeadingText style={styles.title}>
                                Formulario Información Emergencia
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',

  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: '#b30000',
    height: hp('15%'),
  },
  title: {
    color: 'white',
    fontSize: wp('4.5%')
  },
  icon: {
      marginHorizontal: 10,
      color: 'white',
  },

});


export default ToolkitHomeScreen;