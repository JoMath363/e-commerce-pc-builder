import { } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/common/PageTitle";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileSwitcher from "../components/profile/ProfileSwitcher";
import ProfileAddress from "../components/profile/ProfileAddress";
import ProfileCards from "../components/profile/ProfileCards";
import ProfileLogout from "../components/profile/ProfileLogout";

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
        <ProfileLogout/>
      </Main>
      <Footer/>
    </>
  )
};

export default Profile;