// components/PageLayout.jsx
import { Link, Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default PageLayout;
