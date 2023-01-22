
function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };


function Header() {
    const scrollDirection = useScrollDirection();
    
    return (
        <div className={`header ${ useScrollDirection === "down" ? "hide" : "show"}`}>
        <div className="header">
          <ul className="header-langs">
            <li className="ru lang">RU</li>
            <img src={langimg} alt="" />
            <li className="en lang">EN</li>
            <img src={langimg} alt="" />
            <li className="de lang">DE</li>
          </ul>
          <h1>gleamy</h1>
          <div className="header-menu">
            <p>MENU</p>
            <img src={menulogo} alt="" />
          </div>
        </div>
        </div>
    );
  };