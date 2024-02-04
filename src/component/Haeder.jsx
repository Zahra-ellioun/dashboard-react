import { HamburgerMenu } from "./Index";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-x-5 px-4 mb-1">
      <div className="xl:invisible">
        <HamburgerMenu />
      </div>
    </div>
  );
};
export default Header;
