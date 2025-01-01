import { FaXmark } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { AnimatePresence, motion, transform } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import styled, { keyframes } from "styled-components";

const SideBar = ({ isOpen, setIsOpen, object }) => {
  const { NavItems } = object;
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "80%",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <GlobalStyles>
        <MainContainer>
          <motion.div
            animate={{
              width: isOpen ? object.sizing.minWidth : "0px",

              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
              },
            }}
            className="sidebar"
          >
            <div className="top_section">
              <div className="bars">
                <FaXmark onClick={toggle} />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    {object.title}
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            <div className="search">
              <div className="search_icon">
                <BiSearch />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.input
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                    type="text"
                    placeholder="Search"
                  />
                )}
              </AnimatePresence>
            </div>

            <section className="routes">
              {NavItems.map((item, index) => {
                if (item.type === "LastDropdown") {
                  return (
                    item.items &&
                    item.items.map((it, idx) => (
                      <a key={`${it}-${idx}`} href={it.href}>
                        <div
                          className={
                            window.location.pathname === it.href
                              ? "link active"
                              : "link"
                          }
                        >
                          <div className="icon">{it.icon}</div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                              >
                                {it.title}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </a>
                    ))
                  );
                }

                if (item.type === "button") {
                  return (
                    <a
                      className="button-parent"
                      key={`${item}-${index}`}
                      href={item.href}
                    >
                      {isOpen && (
                        <div
                          className="link hp-button"
                          $minWidth={object.sizing.minWidth}
                        >
                          <div className="icon">{item.icon}</div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                              >
                                {item.name}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </a>
                  );
                }

                if (item.items && item.type === "dropdown") {
                  return (
                    <SidebarMenu
                      key={`${item}-${index}`}
                      setIsOpen={setIsOpen}
                      item={item}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                      object={object}
                    />
                  );
                }

                return (
                  <a key={`${item}-${index}`} href={item.href}>
                    <div
                      className={
                        window.location.pathname === item.href
                          ? "link active"
                          : "link"
                      }
                    >
                      <div className="icon">{item.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {item.title}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </a>
                );
              })}
            </section>
          </motion.div>
        </MainContainer>
      </GlobalStyles>
    </>
  );
};

export default SideBar;

const Animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  position: absolute;
`;

const MainContainer = styled.div`
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.6);
  display: flex;
  position: fixed;
  z-index: 999;
  background: white;
  color: black;
  top: 0%;

  .sidebar {
    height: 100vh;
    overflow-y: auto;
    padding: 7px 0;
  }

  .top_section {
    height: 10%;
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 15px 15px;

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .logo {
    max-height: max-content;
    font-size: 18px;
    line-height: 0;
  }

  .bars {
    width: 30px;
    max-height: max-content;

    svg {
      font-size: 1.5rem;
    }
  }

  .search {
    max-height: max-content;
    display: flex;
    align-items: center;
    margin: 10px 0;
    height: 50px;
    padding: 10px;
    input {
      border: 1px solid black;
      margin-left: 10px;
      border-radius: 5px;
      background: rgb(238, 238, 238);
    }  
  }

  .routes {
    max-height: max-content;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  
    .button-parent {
    position: relative;
    }
  }

  .hp-button {
     width: ${(props) => props.minWidth};
     position: fixed;
     bottom: 0%;
     margin-bottom: 0.5rem; 
     border-top: 2px solid gray;
     animation: ${Animation} 0.3s linear;
    }

  .link {
    max-height: max-content;
    display: flex;
    color: black;
    gap: 10px;
    padding: 5px 10px;
    border-right: 4px solid transparent;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
 }

  a {
    text-decoration: none;
  }

  .active {
    border-right: 4px solid white;
    background: rgba(255, 253, 208, 0.6);
  }

  .link_text {
    max-height: max-content;
    white-space: nowrap;
    font-size: 15px;
  }
`;
