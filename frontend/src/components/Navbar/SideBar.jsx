import { FaXmark } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { AnimatePresence, motion, transform } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import styled, { keyframes } from "styled-components";
import * as BsIcons from "react-icons/bs";
import * as BxIcons from "react-icons/bi";
import * as CiIcons from "react-icons/ci";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FiIcons from "react-icons/fi";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as LiaIcons from "react-icons/lia";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RxIcons from "react-icons/rx";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as SlIcons from "react-icons/sl";
import * as TbIcons from "react-icons/tb";
import * as TfiIcons from "react-icons/tfi";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";
import * as AiIcons from "react-icons/ai";

const SideBar = ({ isOpen, setIsOpen, object }) => {
  const { NavItems } = object;
  const toggle = () => setIsOpen(!isOpen);

  const libraries = {
    Bs: BsIcons,
    Bi: BxIcons,
    Ci: CiIcons,
    Cg: CgIcons,
    Di: DiIcons,
    Fi: FiIcons,
    Fc: FcIcons,
    Fa: FaIcons,
    Fa6: Fa6Icons,
    Gi: GiIcons,
    Go: GoIcons,
    Gr: GrIcons,
    Hi: HiIcons,
    Hi2: Hi2Icons,
    Lia: LiaIcons,
    Io: IoIcons,
    Io5: Io5Icons,
    Lu: LuIcons,
    Md: MdIcons,
    Pi: PiIcons,
    Rx: RxIcons,
    Ri: RiIcons,
    Si: SiIcons,
    Sl: SlIcons,
    Tb: TbIcons,
    Tfi: TfiIcons,
    Ti: TiIcons,
    Vsc: VscIcons,
    Wi: WiIcons,
    Ai: AiIcons,
  };

  const DynamicIcon = ({ name }) => {
    if (!name) return null;
    let IconComponent;

    if (name.startsWith("Lia")) {
      IconComponent = LiaIcons[name];
    } else if (name.startsWith("Io5")) {
      IconComponent = Io5Icons[name];
    } else if (name.startsWith("Fa6")) {
      IconComponent = Fa6Icons[name];
    } else if (name.startsWith("Hi2")) {
      IconComponent = Hi2Icons[name];
    } else if (name.startsWith("Tfi")) {
      IconComponent = TfiIcons[name];
    } else if (name.startsWith("Vsc")) {
      IconComponent = VscIcons[name];
    } else {
      const prefix = name.slice(0, 2);
      const library = libraries[prefix];
      IconComponent = library ? library[name] : null;
    }

    return IconComponent ? <IconComponent /> : null;
  };

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
                          <div className="icon">
                            <DynamicIcon name={it.icon} />
                          </div>
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
                          <div className="icon">
                            <DynamicIcon name={item.icon} />
                          </div>
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
                      <div className="icon">
                        <DynamicIcon name={item.icon} />
                      </div>
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
