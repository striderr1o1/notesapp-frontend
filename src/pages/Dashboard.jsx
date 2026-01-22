import Navbar from "../components/Navbar"
import Sidebar from "../components/dashboard/Sidebar"
function Dashboard(){
    const routerlinks = [
        {name: "Logout", to: "/logout"}
    ]
    return (
        <>
        <Navbar logopath="src/assets/logo.png" aLinks={[]} routerLinks={routerlinks} />
        <Sidebar />
        </>
    )
}

export default Dashboard