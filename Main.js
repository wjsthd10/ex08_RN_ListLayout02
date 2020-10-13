import React,{Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default class Main extends Component{
    
    // 대량의 데이터 배열 - 화면갱신 반영
    state={
        datas:[
            {name:'sam', msg:'Hello world', img:require('./images/moana01.jpg')},
            {name:'robin', msg:'Hello android', img:require('./images/moana02.jpg')},
            {name:'kim', msg:'Hello react', img:require('./images/moana03.jpg')},
            {name:'park', msg:'Hello web', img:require('./images/moana04.jpg')},
            {name:'yun', msg:'Hello react-native', img:require('./images/moana05.jpg')},
            {name:'cat', msg:'Hello human', img:{uri:'https://byline.network/wp-content/uploads/2018/05/cat.png'}},
            {name:'sam', msg:'Hello world', img:require('./images/moana01.jpg')},
            {name:'robin', msg:'Hello android', img:require('./images/moana02.jpg')},
            {name:'kim', msg:'Hello react', img:require('./images/moana03.jpg')},
            {name:'park', msg:'Hello web', img:require('./images/moana04.jpg')},
            {name:'yun', msg:'Hello react-native', img:require('./images/moana05.jpg')},
            {name:'cat', msg:'Hello human', img:{uri:'https://byline.network/wp-content/uploads/2018/05/cat.png'}},
        ],
    }// state...

    render(){
        return(
            <ScrollView style={styles.root}>
                {/* 대량의 데이터를 가진 배열을 컴포넌트로 보여주기 */}
                
                {
                    this.state.datas.map((element, index)=>{
                        return (
                            <TouchableOpacity key={index} style={styles.itemaView} onPress={()=>this.clickItem(element,index)}>
                                <Image source={element.img} style={styles.img}></Image>
                                <View style={styles.textView}>
                                    <Text style={styles.itemName}>{element.name}</Text>
                                    <Text style={styles.itemMsg}>{element.msg}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        );// return.....

    }// render mathod....

    clickItem=(element, index)=>{
        // Alert.alert(index+" : "+element.name+", "+element.msg);
        Alert.alert(`${index} : ${element.name}, ${element.msg}`);
    }


}//Main class

const styles=StyleSheet.create({
    root:{
        backgroundColor:'#22334455',
        flex:1,
        padding:16,
    },
    itemaView:{
        marginTop:8,
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#558841",
        borderRadius:20,
        height:180,
        alignItems:"center",
        padding:8,
        backgroundColor:'#22668855'
    },
    img:{
        width:150,
        height:150,
        borderRadius:8,
        resizeMode:"cover"
    },
    textView:{
        padding:16
    },
    itemName:{
        fontSize:24,
        fontWeight:"bold",

    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic'
    }

})