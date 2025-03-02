import { DrawerTrigger } from "../DrawerTrigger";
import { Logo } from "@/components/common/logo";
import './styles.scss';
import { ContentSize } from "@/components/ui/Section";
import { LogoutButton } from "./logout";

const Navigation = () => {

  return (
    <header>
      <ContentSize size="fullscreen">
        <div className="navigation-container">
          <Logo color="#000" />
          <nav className="navigation">
            <ul>
              <li>
                <DrawerTrigger />
              </li>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </nav>
        </div>
      </ContentSize>
    </header>
  );
};
Navigation.displayName = "Navigation";

export default Navigation;