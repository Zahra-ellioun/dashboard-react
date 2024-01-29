import { HamburgerMenu } from "./Index";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-x-5 p-4 mb-1">
      <div>
        <HamburgerMenu />
      </div>
    </div>
  );
};
export default Header;
