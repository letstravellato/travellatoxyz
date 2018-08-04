import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cover">
          <img src={require('./images/Facrebook-skvideo-cover@2x.png')} alt="saurkundi landscape"/>
        </div>
        <div className="content">
        <h1>SAUR KUNDI - HIGH ALTITUDE LAKE TREK</h1>
        <p>A group of experienced trekkers are ready to give you an untouched taste of the mountains. </p>

        <p>A group of 6 experienced trekkers are welcoming you to join their trekking experience in the Mountains. This is a trek to high altitude lake - saurkundi ( earlier known as Rani sui lake ). We would be trekking the usual alpine style means that we would be carrying our own backpacks and sleeping bags.
</p>
        <h4>Travelling dates - 10th - 15th Aug, 2018 </h4>
        <p>
        10th Aug - Depart from Delhi bus stand ( exact details will be updated ) 
15th Aug - Arrive Delhi
        </p>

        <h3>Itinerary goes as follows - </h3>
        <ul>
          <li>Day 1 - Delhi to manali ( we would be getting off at “ Patlikhul” Which is 14 km before Manali )</li>
          <li>Day 2 - Manali - Shangchar - Jammu pani - Maylee thach (7-8 km)
From Patlikhul we will reach Shangchar village and start our trek to first base camp Jammupani. 
This is kind of the difficult trail because of its steep acclivity but also the most beautiful bit as we transition from jungles to open meadows of mauled and get a 360 degree view of few prominent mountain ranges and peaks. Notably, Manalsu glacier, Dhauladhar and Pirpanjal ranges including Hanuman Tibba, Deo Tibba and Rohtang Pass.</li>
          <li>Day 3 - Maylee thach - Rani sui ( 7-8 km ) 
The lake is also known as Saur Kundi Lake. The small lake is rain and snow-fed with no outlet. Lake gets completely frozen in winters. It is surrounded by vast meadows with tree cover. The region is popular for Himalayan herbs. Many shepherds camp in the region during summer months. Stay overnight in camps.
</li>
          <li>Day 4 - Lama Dugh - Manali ( 6-7 km ) 
 It is mostly an downhill climb. Lama Dugh is a lovely meadow surrounded by Maple, Spruce and Oak while strands of Silver Birch are further up on the Hill-side. Stay overnight in camps. 
</li>
        </ul>
       



        <h3>Other details - </h3>
        <p>Trip cost - 9800/- </p>
        <ul>
          <h4>Inclusive of - </h4>
          <li>- Transport from Delhi - Delhi (Volvo ) </li>
          <li>- stay and accommodation during the trek</li>
          <h4>Exclusive of - </h4>
          <li>- Carry your own bags ( pack a light bag and notify before in case you do not want to carry ) </li>
          <li>- Any transport expense like taxi </li>
          <li>- Meals during transits from Delhi to Manali and back </li>
          <li>- Anything not mentioned in the inclusive.</li>
        </ul>
        </div>
        
      </div>
    );
  }
}

export default App;
