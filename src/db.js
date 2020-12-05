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
    static getData() {
        return new Promise(((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    "SELECT * FROM memories",
                    [],
                    (_, res) => resolve(res.rows._array),
                    (_, e) => reject(e)
                )
            })
        }))
    }
    static addEntry({title, img, text}) {
        return new Promise(((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    "INSERT INTO memories(title, img, text, date, favorite) VALUES(?, ?, ? ,? ,?)",
                    [title, img, text, Date.now(), false],
                    (_, res) => resolve(res.insertId),
                    (_, e) => reject(e)
                )
            })
        }))
    }
    static updateEntry(id, favorite) {
        return new Promise(((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    "UPDATE memories SET favorite=? WHERE id=?",
                    [favorite, id],
                    resolve,
                    (_, e) => reject(e)
                )
            })
        }))
    }
    static deleteEntry(id) {
        return new Promise(((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    "DELETE FROM memories WHERE id=?",
                    [id],
                    resolve,
                    (_, e) => reject(e)
                )
            })
        }))
    }
}