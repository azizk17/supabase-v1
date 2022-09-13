import { useRef, useEffect, useState, FC, PropsWithChildren, ReactNode, MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import cn from "classnames";
import { type } from "os";


const useMountTransition = (isMounted, unmountDelay) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, isTransitioning]);

  return isTransitioning;
};

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");

  return drawerRoot;
}

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-drawer-component-with-react-portals
 */

export type FormDrawerProps = PropsWithChildren<{
  isOpen: boolean;
  className?: string;
  title?: ReactNode,
  actions?: ReactNode[];
  closeable: boolean;
  onClose: MouseEventHandler;
  position?: 'left' | 'top' | 'right' | 'bottom';
  width?: 'max-w-xs' | 'max-w-sm' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl' | 'max-w-6xl' | 'max-w-7xl' | 'max-w-full';
  removeWhenClosed?: boolean;
}>



const Drawer: FC<FormDrawerProps> = ({
  isOpen,
  children,
  className,
  title,
  actions,
  closeable = true,
  onClose,
  position = "left",
  width = "max-w-lg",
  removeWhenClosed = true
}) => {
  const bodyRef = useRef(document.querySelector("body"));
  const portalRootRef = useRef(
    document.getElementById("drawer-root") || createPortalRoot()
  );
  const isTransitioning = useMountTransition(isOpen, 300);

  // Append portal root on mount
  useEffect(() => {
    bodyRef.current.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;

    return () => {
      // Clean up the portal when drawer component unmounts
      portal.remove();
      // Ensure scroll overflow is removed
      bodyEl.style.overflow = "";
    };
  }, []);

  // Prevent page scrolling when the drawer is open
  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen) {
        bodyRef.current.style.overflow = "hidden";
      } else {
        bodyRef.current.style.overflow = "";
      }
    };

    updatePageScroll();
  }, [isOpen]);

  // Allow Escape key to dismiss the drawer
  useEffect(() => {
    const onKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keyup", onKeyPress);
    }

    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }



  return createPortal(
    <FocusTrap active={isOpen}>
      <div
        aria-hidden={isOpen ? "false" : "true"}
        className={cn("drawer-container", {
          open: isOpen,
          in: isTransitioning,
          className
        })}
      >
        <div className={'bg-base-100 p-2 ' + cn("drawer w-full max-w-2xl", position, width)} role="dialog">
          <div className=" h-full  flex flex-col  justify-start ">
            <div className=" flex-initial">
              <div className=" flex justify-between items-center space-x-2">
                <div className=" flex items-center justify-start space-x-2">
                  <button type="button"
                    onClick={onClose}
                    className=" btn btn-xs btn-ghost  btn-circle ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>


                  </button>
                  <div className=" font-semibold">
                    {title}
                  </div>
                </div>
                <div className=" flex space-x-2">
                  {actions && (actions.map((a) => a))}
                </div>
              </div>

            </div>
            <div className="  divider my-1 "></div>
            <div className=" flex-1 ">
              {children}
            </div>
          </div>


        </div>
        <div className="backdrop" onClick={closeable ? onClose : undefined} />
      </div>
    </FocusTrap>,
    portalRootRef.current
  );
};

export default Drawer;
