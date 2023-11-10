import "./app.css";
import MainHeader from "./components/Header/header";
import TaskCard from "./components/taskCard/taskCard";

const App = () => {
    return (
        <div>
            <MainHeader />
            <main className="container home">
                <h1 className="title">Simple ToDo App</h1>
                <p className="desc">This todo app for test design.</p>

                <div className="form-box">
                    <input type="text" placeholder="Write Text here . . ."/>
                        <button>+ Add New</button>
                </div>

                <div className="todo-list">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
                <button className="fixed-btn">+ Add New</button>
            </main>
        </div>
    )
};


export default App;
