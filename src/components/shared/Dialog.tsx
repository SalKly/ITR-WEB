import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const Dialog = ({
  isOpen,
  onClose,
  position = "center",
  parentRef,
  children,
  closeOnOutsideClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  position?: "center" | "parent" | "top" | "bottom";
  parentRef?: React.RefObject<HTMLElement>;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (closeOnOutsideClick) {
        if (childRef.current && !childRef.current.contains(event.target as Node)) {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (position === "parent" && parentRef?.current && dialogRef.current) {
      const parentBounds = parentRef.current.getBoundingClientRect();
      const dialog = dialogRef.current;
      const dialogWidth = dialog.offsetWidth;
      const dialogHeight = dialog.offsetHeight;

      let top = parentBounds.top + parentRef.current.offsetHeight;
      let right = window.innerWidth - parentBounds.right + parentRef.current.offsetWidth / 2 - dialogWidth / 2;

      if (top + dialogHeight > window.innerHeight) {
        top = window.innerHeight - dialogHeight - 10;
      }

      if (right < 0) {
        right = 10;
      } else if (right + dialogWidth > window.innerWidth) {
        right = 10;
      }

      dialog.style.top = `${top}px`;
      dialog.style.right = `${right}px`;
    }
  }, [isOpen, position, parentRef]);

  return (
    <dialog
      ref={dialogRef}
      className={twMerge(
        `fixed bg-transparent overflow-hidden  rounded-lg shadow-lg backdrop:bg-[#252525]/50`,
        position === "center" && "top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2",
        position === "top" && "  top-0 right-1/2 transform translate-x-1/2",
        position === "bottom" && "top-3/4 right-1/2 transform translate-x-1/2 -translate-y-1/2",
        position === "parent" && "absolute"
      )}
    >
      <div ref={childRef}>{children}</div>
    </dialog>
  );
};

export default Dialog;
