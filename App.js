import React, {useState} from 'react';
import {Provider} from "react-redux";
import {AppLoading} from "expo";
import Navigator from "./src/Navigation/Navigation";
import store from "./src/redux/store";
import {appPrepare} from "./src/appPrepare";



export default function App() {
    const [ready, setReady] = useState(false);

    if(!ready) return <AppLoading onFinish={() => setReady(true)}
                                  onError={(e) => console.log(e)}
                                  startAsync={appPrepare}
                                  />

    return (
        <Provider store={store}>
            <Navigator/>
        </Provider>
    );
}

