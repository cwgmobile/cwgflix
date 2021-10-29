/* eslint-disable no-unused-vars */
/* eslint-disable no-spaced-func */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground,
  TextInput, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function App() {
  const carouselRef = useRef(null);
  const [lista, setLista] = useState([
    {
      title:'O Justiceiro',
      text: 'Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro',
      release: 2018,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg',
  },
  {
      title: 'Bad Boys for life',
      text: 'Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.',
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg',
  },
  {
      title: 'Viúva Negra',
      text: 'Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.',
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg',
  },
  {
      title: 'Top Gun: MAVERICK',
      text: 'Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.',
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg',
  },
  {
      title: 'BloodShot',
      text: 'Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ',
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg',
  },

  {
      title: 'Free Guy',
      text: 'Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.',
      release: 2020,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg',
 },
 {
  title: 'O Poderoso Chefinho 2',
  text: 'Tim e sua esposa, Carol, a ganha-pão da família, vivem nos subúrbios com sua filha superinteligente de 7 anos, Tabitha, e a adorável nova criança Tina',
  release: 2021,
  img: 'https://br.web.img2.acsta.net/pictures/21/06/24/17/25/2242702.jpg',
},
{
  title: 'Shang-Chi e a Lenda dos Dez Anéis',
  text: 'Shang-Chi é um jovem chinês criado por seu pai em reclusão, sendo treinado em artes marciais. Quando ele tem a chance de entrar em contato com o resto do mundo, ele logo percebe que seu pai não é o humanitário que dizia ser e se vê obrigado a se rebelar.',
  release: 2021,
  img: 'https://ingresso-a.akamaihd.net/prd/img/movie/shang-chi-e-a-lenda-dos-dez-aneis/99cd42d9-5d27-4a96-aa28-c5bf4c9b6fb5.jpg',
},
{
  title: 'Vingadores 4 Ultimato Filme Marvel Avengers',
  text: 'O artista da Marvel Alexander Lozano divulgou no seu portfólio diversas artes dos heróis da editora trajando a roupa branca de viagem no tempo em Vingadores: Ultimato.',
  release: 2020,
  img: 'https://img.elo7.com.br/product/zoom/2678F78/cartaz-poster-vingadores-4-ultimato-filme-marvel-avengers-colecionador.jpg',
},
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
          source={{uri: item.img}}
          style={styles.carouselImg}
          />
          <Text style={styles.carouselText}>{item.title}</Text>
          <Icon 
          name="play-circle-outline"
          size={30} color="#FFF"
          style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

 return (
   <ScrollView style={styles.container}>
        <View style={{flex:1 , height: screenHeight}}>
          <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
          <ImageBackground
          source={{ uri: background}}
          style={styles.imgBg}
          blurRadius={6}
          >
                <View style={styles.viewSearch}>
              <TextInput
                style={styles.input}
                placeholder="Procurando algo?"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>
            </View>
            <Text
            style={{color: '#FFBF00', fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginVertical: 20}}
            >
              Acabou de chegar
            </Text>
            <View style={styles.slideView}>
              <Carousel
              style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={ (index) => {
                setBackground(lista[index].img);
                setActiveIndex(index);
              }}
              />
            </View>
            <View style={styles.moreInfo}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
              <TouchableOpacity
              style={{ marginRight: 15, marginTop: 10 }}
              onPress={() => alert ('CLICOU')}
              >
              <Icon
                name="queue"
                color="#fff"
                size={30}
              />
            </TouchableOpacity>
          </View>
         </ImageBackground>
     </View>
  </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },
  viewSearch: {
    marginTop: 20,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  carouselText: {
    padding: 18,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold',
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  moreInfo: {
    backgroundColor: '#181818',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle: {
    paddingLeft: 18,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  movieDesc: {
    paddingLeft: 18,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
