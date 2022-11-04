import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Container } from 'common/components/container/container.component';
// interface IHeaderProps {}

export const Header: FC = (props) => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx('py-navItem hover:text-black/60 hover:no-underline', {
      'text-black/30': !isActive,
      'text-black/80': isActive,
    });

  return (
    <header>
      <nav className="py-2 px-4">
        <Container>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-Titillium text-2xl mr-8 text-conduit-green"
            >
              conduit
            </Link>
            <ul className="pl-0 mb-0 list-none flex">
              <li className="ml-4">
                <NavLink to="/" className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li className="ml-4">
                <NavLink to="/sign-in" className={navLinkClasses}>
                  SignIn
                </NavLink>
              </li>
              <li className="ml-4">
                <NavLink to="/sign-up" className={navLinkClasses}>
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};
