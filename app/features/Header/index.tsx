import Logo from './components/Logo';
import Menu from './components/Menu';

export default function Header() {
  return (
    <header className="absolute w-full py-4">
      <div className="container flex justify-between">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}
