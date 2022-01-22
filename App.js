import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';

export default function App() {

  const todos = [
    {
      title: "No Time To Die",
      year: 2021,
      desc: "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond on the trail of a mysterious villain who's armed with a dangerous new technology",
      casts: ["Daniel Craig", "Rami Malek", "Léa Seydoux"],
      poster: "https://cdn1-production-images-kly.akamaized.net/3buPDf0MVwgDuGk-A63Wxi3943I=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2987071/original/060424900_1575520835-james_bond.jpg"
    },
    {
      title: "Squid Game",
      year: 2021,
      desc: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
      casts: ["Lee Jung Jae", "HoYeon Jung", "Park Hae Soo", "Yeong-su Oh"],
      poster: "https://www.blackxperience.com/assets/blackattitude/blackstyle//squid-game-header-2-1633290690220-35-300x300.jpg"
    },
    {
      title: "12 Angry Men",
      year: 1957,
      desc: "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
      casts: ["Henry Fonda", "Lee J Cobb", "Jack Klugman"],
      poster: "https://i.pinimg.com/originals/40/10/ea/4010ea6e29cde26c2e4e501d14450bec.jpg"
    },
    {
      title: "Parasite",
      year: 2019,
      desc: "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
      casts: ["Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam", "Lee Jeong-eun"],
      poster: "https://okeylah.com/wp-content/uploads/2020/11/parasite-300x300.jpg"
    },
    {
      title: "Fight Club",
      year: 1999,
      desc: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
      casts: ["Brad Pitt", "Edward Norton"],
      poster: "https://image.posterlounge.com/img/products/680000/676414/676414_poster_l.jpg"
    },
    {
      title: "Gone Girl",
      year: 2014,
      desc: "Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary.",
      casts: ["Rosemund Pike", "Ben Affleck", "Neil Patrick Harris"],
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MWVkNzYtODljYS00MmM2LTlkMTEtYzU2ZTdkYjE2NGEyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"
    }
  ]

  return (
    <View>
      <TodoList todos={todos}></TodoList>
    </View>    
  );
}

