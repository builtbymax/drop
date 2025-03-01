import Link from "next/link";
import { DrawerTrigger } from "./DrawerTrigger";

const Navigation = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '1rem' }}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <DrawerTrigger />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;