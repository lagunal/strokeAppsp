import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';


import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";

const bioImage = require('../assets/bio.jpg');

class BioScreen extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <View style={styles.container}>
            <ScrollView>

                <ImageContainer source={bioImage} orientation={'portrait'} style={styles.image}/>    

                <MainText>
                    A long-time activist in the disability rights movement, and author of more than a dozen books, Florence Weiner has interviewed hundreds of men and women and their families touched by stroke. 
                    She shares their advice here, and at StrokeKnowHow.org: A worldwide stroke community based on the belief that we learn best from one another.    
                </MainText>

                <MainText>
                    Every stroke is unique. So is the path we choose to find our way back. 
                    If you find answers, motivation, inspiration and hope, this work will have fulfilled its purpose.    
                </MainText>
                <MainText>For Richard, the brightest light.</MainText>

            </ScrollView>                
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    image: {
        alignSelf: 'center',
        width: 250,
        marginBottom: 0,

      },
  });

  

export default BioScreen;