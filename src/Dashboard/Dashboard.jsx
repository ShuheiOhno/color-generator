import "./Dashboard.css";

function Dashboard() {
    return (
        <>
        <section className="container">
            <h3>color generator</h3>
            <form>
                <input type="text" value="" placeholder="#2e2c3d" className="" />
                <button className="btn" type="submit" >
                    submit
                </button>
            </form>
        </section>
        <section className="colors">

        </section>
        </>
    )
}

export default Dashboard;