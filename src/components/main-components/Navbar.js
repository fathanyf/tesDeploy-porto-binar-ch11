import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../store/users/UserSlice';
import { auth } from '../../config/firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Modal from 'react-modal';
import { useState } from 'react';
import UpdatePage from '../../pages/account/profile';

const Navbar = () => {
  const user = useSelector(selectUser);

  const router = useRouter();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    auth.signOut();
    toast.warning('You are now logout');
    router.push('/auth/signin');
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark navbar-dark'>
        <div className='container'>
          <Link href='/home'>
            <a className='navbar-brand'>
              <Image
                src='/logochapter10.png'
                width='125px'
                height='30px'
                alt='logo chapter 10'
              />
            </a>
          </Link>
          <button
            className='navbar-toggler order-1'
            type='button'
            data-toggle='collapse'
            data-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse order-3' id='navbarCollapse'>
            <ul className='navbar-nav'>
              <Link className='nav-item' href={'/home'}>
                <a className='nav-link'>
                  <i className='bi bi-controller mr-1'></i>
                  <b>Home</b>
                </a>
              </Link>
              <Link className='nav-item' href={'/games'}>
                <a className='nav-link'>
                  <i className='bi bi-joystick mr-1'></i>
                  <b>Playground</b>
                </a>
              </Link>
            </ul>
          </div>
          <ul className='order-1 order-md-3 navbar-nav navbar-no-expand ml-auto'>
            <Link
              className='nav-item'
              href={{ pathname: '/account', query: { id: user?.uid } }}
            >
              <a className='nav-link'>
                <i className='far fa-user-circle' /> {user?.email}
              </a>
            </Link>
            <li className='nav-item dropdown bg-dark'>
              <a className='nav-link' data-toggle='dropdown' href='#'>
                <i className='bi bi-gear-fill mr-1' />
                <span>Manage User</span>
              </a>
              <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right dark-mode'>
                <a
                  href='#'
                  className='dropdown-item'
                  onClick={() => setModalIsOpen(true)}
                >
                  <i className='bi bi-person-bounding-box mr-4' />
                  Update Profile
                </a>
                <Modal
                  isOpen={modalIsOpen}
                  ariaHideApp={false}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    },
                    content: {
                      position: 'absolute',
                      top: '90px',
                      left: '280px',
                      right: '280px',
                      bottom: '90px',
                      border: '1px solid #ccc',
                      background: '#343a40',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      padding: '20px',
                      color: '#fff',
                    },
                  }}
                >
                  <div style={{ height: '100%' }}>
                    {/* <button onClick={() => setModalIsOpen(false)}>Close</button> */}
                    <UpdatePage />
                  </div>
                </Modal>
                <hr />
                <a href='#' className='dropdown-item'>
                  <i className='bi bi-key-fill mr-4' /> Reset Password
                </a>
                <hr />
                <button
                  className='dropdown-item dropdown-footer'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
