import AuthProvider from "../../providers/auth/AuthProvider";
import MainLayout from "../../components/layout";
import Posts from "./elements/Posts";
import useHome from "./hooks/useHome";
import HomeProvider from "./HomeProvider";

const HomeContainer = () => {
  const {posts} = useHome();
  return (
    <AuthProvider>
      <MainLayout>
        <HomeProvider>
          <Posts data={posts} />
        </HomeProvider>
      </MainLayout>
    </AuthProvider>
  )
};

export default HomeContainer;