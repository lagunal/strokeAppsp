console.disableYellowBox = true;

import { Navigation } from "react-native-navigation";
//import SplashScreen from 'react-native-splash-screen';

//Translations
// import I18n, { getLanguages } from 'react-native-i18n';
// // Available languages
// I18n.translations = {
//   'en': require('./src/translations/en'),
//   'es': require('./src/translations/es'),
// };
// I18n.fallbacks = true;


import HomeScreen from "./src/screens/Home.Screen";
import MedicationsScreen from './src/screens/Medications.Screen';
import WeeklyPlanScreen from './src/screens/WeeklyPlan.Screen';
import MovingSafelyScreen from './src/screens/MovingSafely.Screen';
import EmergencyToolkit from './src/screens/Toolkits/EmergencyToolkit.Screen';
import MedicationsToolkit from './src/screens/Toolkits/MedicationsToolkit.Screen';
import HelpNeededToolkit from './src/screens/Toolkits/HelpNeededToolkit.Screen';
import PhysicalToolkit from './src/screens/Toolkits/PhysicalToolkit.Screen';
import ScheduleToolkit from './src/screens/Toolkits/ScheduleToolkit.Screen';
import LoginScreen from './src/screens/Login.Screen';
import SkinCareScreen from './src/screens/SkinCare.Screen';
import BladderControlScreen from './src/screens/BladderControl.Screen';
import BloodPressureScreen from './src/screens/BloodPressure.Screen';
import ToolkitHomeScreen from './src/screens/Toolkits/ToolkitHomeScreen';
import RangeMotionScreen from './src/screens/RangeMotion.Screen';
import GettingUpScreen from './src/screens/GettingUp.Screen';
import BrainBodyScreen from './src/screens/BrainBody.Screen';
import EmergencyScreen from './src/screens/Emergency.Screen';
import BioScreen from './src/screens/Bio.Screen';
import ContentsScreen from './src/screens/Contents.Screen';
import NewDayScreen from './src/screens/NewDay.Screen';
import ProfileScreen from './src/screens/Profile.Screen';
import ModalCoverScreen from './src/screens/ModalCover.Screen';

// Register Screens
Navigation.registerComponent("strokeAppSp.HomeScreen", () => HomeScreen);
Navigation.registerComponent("strokeAppSp.MedicationsScreen", () => MedicationsScreen);
Navigation.registerComponent("strokeAppSp.WeeklyPlanScreen", () => WeeklyPlanScreen);
Navigation.registerComponent("strokeAppSp.MovingSafelyScreen", () => MovingSafelyScreen);
Navigation.registerComponent("strokeAppSp.EmergencyToolkitScreen", () => EmergencyToolkit);
Navigation.registerComponent("strokeAppSp.MedicationsToolkitScreen", () => MedicationsToolkit);
Navigation.registerComponent("strokeAppSp.HelpNeededToolkitScreen", () => HelpNeededToolkit);
Navigation.registerComponent("strokeAppSp.PhysicalToolkitScreen", () => PhysicalToolkit);
Navigation.registerComponent("strokeAppSp.ScheduleToolkitScreen", () => ScheduleToolkit);
Navigation.registerComponent("strokeAppSp.LoginScreen", () => LoginScreen);
Navigation.registerComponent("strokeAppSp.SkinCareScreen", () => SkinCareScreen);
Navigation.registerComponent("strokeAppSp.BladderControlScreen", () => BladderControlScreen);
Navigation.registerComponent("strokeAppSp.BloodPressureScreen", () => BloodPressureScreen);
Navigation.registerComponent("strokeAppSp.ToolkitHomeScreen", () => ToolkitHomeScreen);
Navigation.registerComponent("strokeAppSp.RangeMotionScreen", () => RangeMotionScreen);
Navigation.registerComponent("strokeAppSp.GettingUpScreen", () => GettingUpScreen);
Navigation.registerComponent("strokeAppSp.BrainBodyScreen", () => BrainBodyScreen);
Navigation.registerComponent("strokeAppSp.EmergencyScreen", () => EmergencyScreen);
Navigation.registerComponent("strokeAppSp.BioScreen", () => BioScreen);
Navigation.registerComponent("strokeAppSp.ContentsScreen", () => ContentsScreen);
Navigation.registerComponent("strokeAppSp.ProfileScreen", () => ProfileScreen);
Navigation.registerComponent('strokeAppSp.NewDayScreen', () => NewDayScreen);
Navigation.registerComponent("StrokeApp.ModalCoverScreen", () => ModalCoverScreen);


// Start a App
//   Promise.all([
//       Icon.getImageSource("ios-menu", 30)
//   ]).then(sources => {
  
      // setInterval(() => {
        //SplashScreen.hide();
      // }, 3000);
      
      Navigation.startSingleScreenApp({
        screen: {
          screen: "StrokeApp.ModalCoverScreen",
        },
      });
//});


