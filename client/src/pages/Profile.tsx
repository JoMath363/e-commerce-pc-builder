import { } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/ui/PageTitle";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileSwitcher from "../components/profile/ProfileSwitcher";
import ProfileAddress from "../components/profile/ProfileAddress";
import ProfileCards from "../components/profile/ProfileCards";

const Profile = () => {
  return (
    <>
      <NavBar />
      <Main>
        <PageTitle text="Your Account"/>
        <ProfileInfo/>
        <ProfileAddress/>
        <ProfileCards/>
        <ProfileSwitcher/>
      </Main>
      <Footer/>
    </>
  )
};

export default Profile;