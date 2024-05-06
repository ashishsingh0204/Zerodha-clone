import TopNavBar from "../ui/landing-page/top-nav-bar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col">
        <TopNavBar></TopNavBar>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }