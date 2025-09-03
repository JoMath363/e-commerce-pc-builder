import { } from "react-icons/pi";
import NavBar from "../components/layout/NavBar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/PageTitle";
import ProfileInfo from "../features/profile/components/ProfileInfo";
import ProfileSwitcher from "../features/profile/components/ProfileSwitcher";
import ProfileAddress from "../features/profile/components/ProfileAddress";
import ProfileCards from "../features/profile/components/ProfileCards";
import ProfileLogout from "../features/profile/components/ProfileLogout";

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