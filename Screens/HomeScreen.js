import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
    ImageBackground,
    Image,
    Modal,
    Pressable,
    Button,
  } from "react-native";
  import { useState, useEffect } from "react";
  import {  } from "react-native-vector-icons"

const HomeScreen = ({ navigation }) => {
    const [upcoming, setUpcoming] = useState([]);
  const [movieList, setMovieList] = useState();
  const [tvShow, setTvShow] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalContent2, setModalContent2] = useState();
  useEffect(() => {
    async function fetchData() {
      const url = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d537d676famsh31c1480ecf72f18p143e17jsn7421ad751f48",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.results[0].primaryImage.url);
        setUpcoming(result.results);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchMovie() {
      const url =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDM1MjhlNzcxZWUzNmU4ZTY0YWFhMjZkOTJhZTJiNSIsInN1YiI6IjY1N2I0MzRiNjNlNmZiMDBlM2NkOWM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OdPD0u--6TRO5b8gVdVB-UQ8yeMHVY1fovOl6iVcWMs",
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.results) {
          console.log(json.results[0].poster_path);
          setMovieList(json.results);
        } else {
          console.error("No results found in the movie response");
        }
      } catch (err) {
        console.error("Error fetching movie data:", err);
      }
    }

    async function fetchTVShows() {
      const url =
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            `Bearer ${process.env.REACT_API_KEY}`,
        },
      };
      console.log(process.env.REACT_API_KEY)

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (json.results) {
          console.log("tv shows->>",json.results);
          setTvShow(json.results);
        } else {
          console.error("No results found in the movie response");
        }
      } catch (error) {
        console.error("Error fetching TV SHOW data:", err);
      }
    }

    fetchData();
    fetchMovie();
    fetchTVShows();
  }, []); 

  const setContent = (movie) => {
    console.log(movie);
    setIsModalOpen(true);
    setModalContent(movie);
  };
  const setContent2 = (movie) => {
    console.log(movie);
    setIsModal2Open(true);
    setModalContent2(movie);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
      <StatusBar />
      <ScrollView>
        <ImageBackground
          style={{ height: 200, width: 400 }}
          source={{
            uri: "https://tse1.mm.bing.net/th?id=OIP.sm8147gT2ZopPvkku2YOYQHaEK&pid=Api&P=0&h=180",
          }}
        >
          {/* <Text>Adaptive Icon</Text> */}
        </ImageBackground>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", color: "orange", fontSize: 20 }}>
            Featured Today
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.scrollViewContent}
          >
            {upcoming &&
              upcoming.map((movie, index) => (
                <View key={index}>
                  {/* {movie.primaryImage && movie.primaryImage.url?(

                ):} */}
                  <Pressable onPress={() => setContent(movie)}>
                    <Image
                      style={{
                        height: 150,
                        width: 150,
                        borderRadius: 15,
                        resizeMode: "cover",
                      }}
                      source={{
                        uri:
                          movie.primaryImage?.url ||
                          "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/12/Animal-2-322x402.jpg",
                      }}
                    //   loadingIndicatorSource={require("./assets/gifff.webp")}
                    />
                  </Pressable>
                  <Text style={styles.item} numberOfLines={2}>
                    {movie.titleText.text}
                  </Text>
                </View>
              ))}
          </ScrollView>
        </View>

        <View>
          <Text style={{ fontSize: 20, color: "orange", fontWeight: "bold" }}>
            What to watch
          </Text>
          <View>
            <Text style={{ fontSize: 15, color: "white", marginTop: 10 }}>
              Top Picks for your
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.scrollViewContent}
            >
              {movieList &&
                movieList.map((movie, index) => (
                  <View key={index}>
                    <Pressable onPress={() => setContent2(movie)}>
                      <Image
                        style={{
                          height: 150,
                          width: 150,
                          borderRadius: 15,
                          resizeMode: "cover",
                        }}
                        source={{
                          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                        }}
                      />
                    </Pressable>
                    <Text style={styles.item} numberOfLines={2}>
                      {movie.original_title}
                    </Text>
                  </View>
                ))}
            </ScrollView>
          </View>
          <View>
            <Text style={{ fontSize: 15, color: "white", marginTop: 10 }}>
              Top TV Shows for You
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.scrollViewContent}
            >
              {tvShow &&
                tvShow.map((movie, index) => (
                  <View key={index}>
                    <Pressable onPress={() => setContent2(movie)}>
                      <Image
                        style={{
                          height: 150,
                          width: 150,
                          borderRadius: 15,
                          resizeMode: "cover",
                        }}
                        source={{
                          uri: `https://image.tmdb.org/t/p/original${tvShow[index].poster_path}`,
                          
                        }}
                      />
                    </Pressable>
                    <Text style={styles.item} numberOfLines={2}>
                      {tvShow.original_name}
                    </Text>
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
        <Modal
          visible={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          animationType="fade"
          presentationStyle="pageSheet"
          style={{ padding: 50 }}
        >
          {modalContent && (
            <View style={styles.modalView}>
              <Image
                style={{
                  height: 300,
                  width: 300,
                  borderRadius: 15,
                  resizeMode: "stretch",
                }}
                source={{
                  uri:
                    modalContent.primaryImage?.url ||
                    "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/12/Animal-2-322x402.jpg",
                }}
              />
              <Text style={styles.modalViewText}>
                {modalContent.titleText.text}
              </Text>
            </View>
          )}
          <Button
            title="Close Button"
            onPress={() => setIsModalOpen(false)}
          ></Button>
        </Modal>
        <Modal
          visible={isModal2Open}
          onRequestClose={() => setIsModal2Open(false)}
          animationType="fade"
          presentationStyle="pageSheet"
          style={{ padding: 50 }}
        >
          {modalContent2 && (
            <View style={styles.modalView}>
              <Image
                style={{
                  height: 300,
                  width: 300,
                  borderRadius: 15,
                  resizeMode: "stretch",
                }}
                source={{
                  uri:
                    `https://image.tmdb.org/t/p/original${modalContent2.poster_path}` ||
                    "https://stat5.bollywoodhungama.in/wp-content/uploads/2023/12/Animal-2-322x402.jpg",
                }}
              />
              <Text style={styles.modalViewText}>
                {modalContent2.original_title}
              </Text>
            </View>
          )}
          <Button
            title="Close Button"
            onPress={() => setIsModal2Open(false)}
          ></Button>
        </Modal>
      </ScrollView>
      <Button title="GO to About" onPress={()=>navigation.navigate("About", {
        name:"Sahil",
      }) } />
    </View>
  )
}

const styles = StyleSheet.create({
    scrollViewContent: {
      flexDirection: "row",
      padding: 16,
      justifyContent: "space-evenly",
      gap: 10,
    },
    item: {
      color: "white",
      fontSize: 15,
      textAlign: "center",
      fontWeight: "bold",
      width: 150,
    },
    modalView: {
      resizeMode: "cover",
      flexDirection: "column",
      flex: 1,
      padding: 20,
      backgroundColor: "black",
      alignContent: "center",
      alignItems: "center",
      gap: 25,
    },
    modalViewText: {
      color: "white",
      fontSize: 25,
      textAlign: "center",
      fontWeight: "900",
      // width: 150,
    },
    // modalViewText:{
  
    // }
  });

export default HomeScreen
