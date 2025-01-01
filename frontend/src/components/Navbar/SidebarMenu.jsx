import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
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

const libraries = {
  Bs: BsIcons,
  Bi: BxIcons,
  Ci: CiIcons,
  Cg: CgIcons,
  Di: DiIcons,
  Fi: FiIcons,
  Fc: FcIcons,
  Fa: FaIcons,
  Gi: GiIcons,
  Go: GoIcons,
  Gr: GrIcons,
  Hi: HiIcons,
  Io: IoIcons,
  Lu: LuIcons,
  Md: MdIcons,
  Pi: PiIcons,
  Rx: RxIcons,
  Ri: RiIcons,
  Si: SiIcons,
  Sl: SlIcons,
  Tb: TbIcons,
  Ti: TiIcons,
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

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    padding: "0 0 0 1rem",
    transition: {
      duration: 0.2,
      when: "beforeChildren",
    },
  },
};

const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ item, showAnimation, isOpen, setIsOpen, object }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <Wrapper>
      <Menu className="link" onClick={toggleMenu}>
        <div className="menu_item">
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

        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}
      </Menu>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {item.items &&
              item.items.map((it, i) => {
                if (it.items) {
                  return (
                    <SidebarMenu
                      key={`${it}-${i}`}
                      item={it}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      object={object}
                    />
                  );
                }

                return (
                  <motion.div
                    variants={menuItemAnimation}
                    key={`${it}-${i}`}
                    custom={i}
                  >
                    <a href={it.href}>
                      <div className="link" $object={object}>
                        <div className="icon">
                          <DynamicIcon name={it.icon} />
                        </div>
                        <motion.div className="link_text">
                          {it.title}
                        </motion.div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default SidebarMenu;

const Wrapper = styled.div`
  .menu_container {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    background-color: rgba(255, 253, 208, 0.5);
  }

  .link {
    display: flex;
    color: black;
    gap: 10px;
    padding: 5px 10px;
    border-right: 4px solid transparent;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  .link:hover {
    border-right: 4px solid white;
    background: rgb(238, 238, 238);
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .active {
    border-right: 4px solid white;
    background: rgb(238, 238, 238);
  }
`;

const Menu = styled.div`
  display: flex;
  color: white;

  padding: 5px 10px;
  border-right: 4px solid transparent;
  transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  justify-content: space-between;

  .menu_item {
    display: flex;
    gap: 10px;
  }

  .link_text {
    white-space: nowrap;
    font-size: 15px;
  }
`;
