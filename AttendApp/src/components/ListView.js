import React, { Component } from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import CourseModel from './CourseModel';
import SearchBar from './SearchBar';
import SortableListView from 'react-native-sortable-listview';
import ListViewItem from './ListViewItem';
import Utils from './Utils';
import CourseService from './CourseService';
import Header from './Header';
import ListFooter from './ListFooter';

let dataList = CourseService.findAll();
var dataListOrder = getOrder(dataList);

function getOrder(list) {
    return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
    Utils.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
    if (listView.forceUpdate) listView.forceUpdate();
}

class ListView extends Component {
    constructor(props) {
        super(props);
        this.updateDataList = this.updateDataList.bind(this);
        this._onCompletedChange = this._onCompletedChange.bind(this);
        this.state = {
            dataList: dataList,
            navigation: this.props.navigation
        }
    }

    updateDataList(dataList) {
        dataListOrder = getOrder(dataList);
        this.setState({
            dataList: dataList
        });
    }

    _onCompletedChange() {
        if (this.forceUpdate) this.forceUpdate();
    }

    render() {
        const {navigate} = this.props.navigation;
        let listView = (<View></View>);
        if (this.state.dataList.length) {
            listView = (
                <SortableListView
                    ref='listView'
                    style={{flex: 3}}
                    data={this.state.dataList}
                    order={dataListOrder}
                    onRowMoved={e => moveOrderItem(this, e.from, e.to)}
                    renderRow={(dataItem, section, index) => <ListViewItem data={dataItem} navigation = {this.state.navigation} onCompletedChange={this._onCompletedChange}/>}
                />
            );
        }

        return (

            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <Header title={'Courses'}></Header>
                {listView}
                <ListFooter navigate= {navigate} navigation = {'CreateCourse'} title={'Create New Course'}></ListFooter>
            </View>
        )
    }
};
//<SearchBar data={Array.from(dataList)} updateDataList={this.updateDataList}/>
module.exports = ListView;