import "./StudentView.css"
import React from "react";
import { useDB } from "../../contexts/DBContext";
import { useState } from "react";


export default function StudentView() {

    const { user, getUserTasks, submitSolution } = useDB()
    const [filename, setfile] = useState("Wybierz plik z komputera")
    console.log("jestem se tu")

    //pokaz taski z bazy
    const logUserInfo = async () => { return
        console.log("aaa jestem se tu")
        getUserTasks(user.uid).then(tasks => {
            console.log("jestem se tu")
            let listItems = (tasks.map((task) => {
                return (
                    <li>
                        {console.log("xdddd")}
                        <div className="post">
                            <div className="header">
                                <h1>{task.name}</h1>
                            </div>
                            <div>
                                <div className="description"><p>{task.description}</p>
                                    <h3></h3>
                                </div>
                                <div className="attachments">
                                    <div className="files-container">

                                        <ol>
                                            <li> {filename} <button type="submit" className="add" onClick={dfn} >Usun</button></li>
                                        </ol>

                                        <div className="buttons">

                                            <form onSubmit={formHandler}>
                                                <div class="field upload">
                                                    <label>Wybierz plik z komputera</label>
                                                    <input type="file" id="upload-button" onChange={changefilename} name="upload-file"></input>
                                                </div>
                                                <button type="submit" className="send" >Przeslij Zadanie</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            }
            )
            )
        }
        )
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log("xdddd");
        const file = e.target[0].files[0]
        submitSolution("testGroup", "testTask", file)
    }

    //dodaje nazwe pliku do tabelki
    function changefilename(e) {
        setfile(e.target.files[0].name);
    }
    //usuwa nazwe pliku
    function dfn() {
        console.log("123");
        setfile("Wybierz plik z komputera");
    }

    return (
        <div>
            <ul>
                {logUserInfo}
            </ul>
        </div>
    );
}
