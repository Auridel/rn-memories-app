import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("memories");

export default class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS memories (id INTEGER PRIMARY KEY NOT NULL, " +
                    "title TEXT NOT NULL, img TEXT NOT NULL, text TEXT, date TEXT NOT NULL, favorite BOOLEAN)",
                    [],
                    resolve,
                    (_, e) => reject(e)
                )
            })
        })
    }
}