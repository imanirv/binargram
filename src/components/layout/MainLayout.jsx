import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

const MainLayout = ({ children }) => {

  return (
    <>
      <Navbar />
      <div className="bg-black">
        <main className="min-h-screen max-w-md border border-gray-600 mx-auto py-20 ">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );

};

export default MainLayout;