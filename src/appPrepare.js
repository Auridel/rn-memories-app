import DB from "./db";
import * as Font from "expo-font";

export async function appPrepare() {
    try{
        await Font.loadAsync({
            "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
            "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf")
        });
        await DB.init();
    }catch (e) {
        console.log(e);
    }
}