import { useEffect } from "react";
import "./App.css";
import axios from "axios";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨 정보가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
// 3. 5개의 버튼이 있다 (현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 누를 때 마다 해당 날씨가 보인다.
// 5. 현재 위치 기반 날씨 버튼을 클릭하면 다시 현재위치 기반으로 돌아온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

// 1. 앱이 실행 되자마자 -> useEffect(함수, 배열)
// 2. 현재 위치 -> get current location javascript 구글 검색
// 3. 날씨 정보 가져오기

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeaterByCurrentLocation(lat, lon);
    });
  };

  const getWeaterByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=c6de406e083c681266b9287653186f07`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.openweathermap.org/data/3.0/onecall?lat=37.5518227&lon=126.8489835&appid=c6de406e083c681266b9287653186f07",
  //   }).then((result) => {
  //     console.log(result.data);
  //   });
  // }, []);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <div>asdasd</div>
    </>
  );
}

export default App;
