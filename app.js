const App = () => {
    // state変数　フック
    const [city, setCity] = React.useState('');
    const [time, setTime] = React.useState('');
    const [icon, setIcon] = React.useState('');

// 　console.log(city); // デバッグ
//   console.log([time, setTime]); // デバッグ
//   api設定

    const handleCityChange = (event) => {
        setCity(event.target.value);
        // 正規表現
        const pattern = /\/(.*)$/;
        let cityName = event.target.value.match(pattern);
        cityName = cityName && cityName[1]; // nullチェック
        switch (cityName) {
            case "New_York":
                cityName = "New York";
                break;
            case "Sao_Paulo":
                cityName = "Sao Paulo";
                break;
            case "Mexico_City":
                cityName = "Mexico City";
                break;
            default:
                break; // どのケースにも当てはまらない場合のデフォ　この部分いらない
        }

        const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: event.target.value });
        setTime(currentTime);
        // apiの部分
        const apiKey = "320b4b840872dceaa9b654a8b14f379b";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        fetch(apiUrl)
        .then(response => response.json()) //jsonへ
        .then(data => {
            setIcon(data.weather[0].icon); // iconのステータス更新
        });
    };

    return (
        <div>
            <select onChange={handleCityChange} value={city}>
                <option value="">都市を選択してください</option>
                <option value="Asia/Bahrain">バーレーン</option>
                <option value="Asia/Riyadh">サウジアラビア</option>
                <option value="Australia/Melbourne">オーストラリア</option>
                <option value="Asia/Tokyo">日本</option>
                <option value="Asia/Shanghai">中国</option>
                <option value="America/New_York">アメリカ</option>
                <option value="Europe/Rome">イタリア</option>
                <option value="Europe/Monaco">モナコ</option>
                <option value="America/Toronto">カナダ</option>
                <option value="Europe/Madrid">スペイン</option>
                <option value="Europe/Vienna">オーストリア</option>
                <option value="Europe/London">イギリス</option>
                <option value="Europe/Budapest">ハンガリー</option>
                <option value="Europe/Brussels">ベルギー</option>
                <option value="Europe/Amsterdam">オランダ</option>
                <option value="Asia/Baku">アゼルバイジャン</option>
                <option value="Asia/Singapore">シンガポール</option>
                <option value="America/Mexico_City">メキシコ</option>
                <option value="America/Sao_Paulo">ブラジル</option>
                <option value="Asia/Qatar">カタール</option>
                <option value="Asia/Dubai">アブダビ</option>
            </select>
            <div className="time">{city && `の現在の時間: ${time}`}</div>
            <div className="image">
                {icon && <img src={`http://openweathermap.org/img/w/${icon}.png`} />}
            </div>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('app'));