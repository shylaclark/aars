import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TouchableHighlight, StyleSheet} from 'react-native';
import CourseService from './CourseService';
import AttendanceSheet from "../screens/AttendanceSheet";

//export default
class ListViewItem extends Component{
    constructor(props)
    {
        super(props);
        //this._onRowLinkPressed = this._onRowLinkPressed.bind(this);
        this.state =  {
            data: this.props.data,
            navigation: this.props.navigation
            //navigation: this.props.navigation
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data,
            navigation: props.navigation
        })
    }

    //onRowLinkPressed() {
        //var data = this.state.data;
    //    let {navigate} = this.props.navigation;
    //    <View>
            //    <TouchableOpacity activeOpacity={.5} onPress={ ()=> navigate('AttendanceSheet') }>
            //        <View style={styles.inputContainer}>
            //            <Text style={styles.whiteFont}>{this.props.title}</Text>
            //        </View>
            //    </TouchableOpacity>
    //        </View>

    //    CourseService.update(data, () => {
    //        data.completed = !data.completed
    //        this.setState({
    //            data: data
    //        });

     //       this.props.onActiveChange();

       // }
        render(){
            const {navigate} = this.props.navigation;
            let data = this.state.data;
            let color = data.active ? 'white' : 'gray';
            let textDecorationLine = data.active ? 'none' : 'line-through';
            return(
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={ ()=> this.props.navigation('AttendanceSheet')}
                    style={{
                        paddingTop: 6,
                        paddingBottom: 6,
                        backgroundColor: "black",
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        borderColor: '#eee'
                    }}{...this.props.sortHandlers}>
                    <View style={styles.inputContainer}
                          size={20}
                          activeOpacity={.5}
                          borderRadius={5}>
                        <Text style={{marginRight: 10,  fontSize: 16, color: color, textDecorationLine: textDecorationLine}}>{[data.courseDepartment, ' ', data.courseNumber, ' (', data.courseSection, ')- ', data.courseTitle ]}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

let styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: "black",
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        marginRight: 20,


    },
    greyFont: {
        color: '#D8D8D8'
    },
    blackFont: {
        color: '#000'
    },
    whiteFont: {
        color: '#FFF',
        fontSize: 17
    }
});

    module.exports = ListViewItem;
//onPress={ ()=> navigate('AttendanceSheet')}