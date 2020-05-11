import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { header1, header2, header3, global1, global2, global3, global4, worldmap1, worldmap2, worldmap3, worldmap4 } from '../../../../assets';

class DataGlobal extends React.Component{
  constructor(){
    super();
    this.state={
      global:{},
      refreshing: false
    }
  }
  
  onRefresh= () =>{
    this.getDataApi();
  }

  componentDidMount = () =>{
    this.getDataApi();
  }

  getDataApi = async () => {
    this.setState({refreshing: true})
    const response = await fetch('https://covid19.mathdro.id/api')
    const global = await response.json()
    const { confirmed , recovered , deaths, lastUpdate} = await global
    this.setState({
        global: {
            confirmed: await confirmed,
            recovered: await recovered,
            death: await deaths,
            lastUpdate: await lastUpdate,
        },
        refreshing: false
    })
  }

  render(){
    if (!this.state.global.confirmed) {
      return <Text style={styles.textLoading}>Loading..</Text>
    }
    if (!this.state.global.recovered){
      return <Text style={styles.textLoading}>Loading..</Text>
    }
    if (!this.state.global.death){
      return <Text style={styles.textLoading}>Loading..</Text>
    }
    if (!this.state.global.lastUpdate){
      return <Text style={styles.textLoading}>Loading..</Text>
    }
     return (
      <ImageBackground source={header1} style={styles.containerBackground}>
        <View style={styles.containerContent}>
          <View style={styles.subJudulContainer}>
            <Text style={styles.textSubJudul}> Data Global</Text>
          </View>
          <Image source={global3} style={styles.imgIconGlobal}></Image>
          <Text style={styles.textLastUpdate}>Last Update : {this.state.global.lastUpdate}</Text>
          
          <View style={styles.containerDataApi}>
            <View style={styles.containerIsiDataLabel}>
              <Text style={styles.textLabelData}>Positif</Text>
              <Text style={styles.textLabelData}>Sembuh</Text>
              <Text style={styles.textLabelData}>Meninggal</Text>
            </View>
            <View style={styles.containerIsiDataApi}>
              <Text style={styles.dataPositif}>{this.state.global.confirmed.value}</Text>
              <Text style={styles.dataSembuh}> {this.state.global.recovered.value}</Text>
              <Text style={styles.dataMeninggal}>{this.state.global.death.value}</Text>              
            </View>
          </View>
          <Image source={worldmap4} style={{width: 400, height:220,}}></Image>
            
        </View>
     </ImageBackground>
    );
  }
}
export default DataGlobal;




const styles = StyleSheet.create({
  textLoading:{
    marginTop: 300,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#000080'
  },
  containerContent:{
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  containerBackground:{
    alignItems: 'center',
    width: '100%', 
    height: 350,
  },
  imgIconGlobal:{
    marginLeft: 30,
    width: 130, 
    height: 130,
  },
  subJudulContainer:{
    marginTop: 25,
    marginBottom: 10,
  },
  textSubJudul:{
    color: '#EBEBEB',
    fontSize: 25,
    fontWeight: 'bold',
  },

  containerDataApi:{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 70,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  containerIsiDataLabel:{
    flex: 1,
    alignItems: 'flex-start',
    paddingVertical: 20,
    marginHorizontal: 25,
  },
  containerIsiDataApi:{
    flex: 1,
    alignItems: 'flex-end',
    paddingVertical: 20,
    marginHorizontal: 25,
  },
  textLabelData:{
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: '700',
  },
  textLastUpdate:{
    top: 40,
    fontSize: 14,
    color: '#EBEBEB'
    
  },
  
  dataPositif:{
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: '700',
    color: '#800000',
  },
  dataSembuh:{
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: '700',
    color: 'darkgreen',
  },
  dataMeninggal:{
    fontSize: 16,
    fontWeight: '700',
    color: '#808000',
  },

})